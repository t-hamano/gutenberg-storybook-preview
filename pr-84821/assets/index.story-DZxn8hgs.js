import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { r as init_react_platform, t as createPortal } from "./react-platform-BqLbFOjq.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as throttle, t as init_throttle } from "./throttle-FioEcidh.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { t as icon_default } from "./icon-DEDMwo2v.js";
import { n as more_default } from "./more-U4HqW_9x.js";
import { n as init_wp_compat_overlay_slot, t as getWpCompatOverlaySlot } from "./wp-compat-overlay-slot-BUcIVYRr.js";
import { r as init_build_module } from "./library.story-CFsmdbdz.js";
//#region ../packages/components/src/draggable/style.module.scss
var clone, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		clone = "_clone_ykx1n_9";
		style_module_default = {
			"invisible-drag-image": "_invisible-drag-image_ykx1n_1",
			clone,
			"is-in-compat-slot": "_is-in-compat-slot_ykx1n_16"
		};
	})))();
}
//#endregion
//#region ../packages/components/src/draggable/index.tsx
/**
* `Draggable` is a Component that provides a way to set up a cross-browser
* (including IE) customizable drag image and the transfer data for the drag
* event. It decouples the drag handle and the element to drag: use it by
* wrapping the component that will become the drag handle and providing the DOM
* ID of the element to drag.
*
* Note that the drag handle needs to declare the `draggable="true"` property
* and bind the `Draggable`s `onDraggableStart` and `onDraggableEnd` event
* handlers to its own `onDragStart` and `onDragEnd` respectively. `Draggable`
* takes care of the logic to setup the drag image and the transfer data, but is
* not concerned with creating an actual DOM element that is draggable.
*
* ```jsx
* import { Draggable, Panel, PanelBody } from '@wordpress/components';
* import { Icon, more } from '@wordpress/icons';
*
* const MyDraggable = () => (
*   <div id="draggable-panel">
*     <Panel header="Draggable panel">
*       <PanelBody>
*         <Draggable elementId="draggable-panel" transferData={ {} }>
*           { ( { onDraggableStart, onDraggableEnd } ) => (
*             <div
*               className="example-drag-handle"
*               draggable
*               onDragStart={ onDraggableStart }
*               onDragEnd={ onDraggableEnd }
*             >
*               <Icon icon={ more } />
*             </div>
*           ) }
*         </Draggable>
*       </PanelBody>
*     </Panel>
*   </div>
* );
* ```
*/
function Draggable({ children, onDragStart, onDragOver, onDragEnd, appendToOwnerDocument = false, cloneClassname, elementId, transferData, __experimentalTransferDataType: transferDataType = "text", __experimentalDragComponent: dragComponent }) {
	const cleanupRef = (0, import_react.useRef)(() => {});
	const [dragComponentContainer, setDragComponentContainer] = (0, import_react.useState)(null);
	/**
	* Removes the element clone, resets cursor, and removes drag listener.
	*
	* @param event The non-custom DragEvent.
	*/
	function end(event) {
		event.preventDefault();
		cleanupRef.current();
		onDragEnd?.(event);
	}
	/**
	* This method does a couple of things:
	*
	* - Clones the current element and spawns clone over original element.
	* - Adds a fake temporary drag image to avoid browser defaults.
	* - Sets transfer data.
	* - Adds dragover listener.
	*
	* @param event The non-custom DragEvent.
	*/
	function start(event) {
		const { ownerDocument } = event.target;
		const slot = getWpCompatOverlaySlot();
		const compatSlot = slot?.ownerDocument === ownerDocument ? slot : null;
		event.dataTransfer.setData(transferDataType, JSON.stringify(transferData));
		const cloneWrapper = ownerDocument.createElement("div");
		cloneWrapper.style.top = "0";
		cloneWrapper.style.left = "0";
		const dragImage = ownerDocument.createElement("div");
		if ("function" === typeof event.dataTransfer.setDragImage) {
			dragImage.classList.add(...dragImageClasses);
			ownerDocument.body.appendChild(dragImage);
			event.dataTransfer.setDragImage(dragImage, 0, 0);
		}
		cloneWrapper.classList.add(...cloneWrapperClasses);
		const inSlotClass = style_module_default["is-in-compat-slot"];
		if (compatSlot && inSlotClass) cloneWrapper.classList.add(inSlotClass);
		if (cloneClassname) cloneWrapper.classList.add(cloneClassname);
		let x = 0;
		let y = 0;
		if (dragComponent) {
			x = event.clientX;
			y = event.clientY;
			cloneWrapper.style.transform = `translate( ${x}px, ${y}px )`;
			(compatSlot ?? ownerDocument.body).appendChild(cloneWrapper);
			setDragComponentContainer(cloneWrapper);
		} else {
			const element = ownerDocument.getElementById(elementId);
			const elementRect = element.getBoundingClientRect();
			const elementWrapper = element.parentNode;
			const elementTopOffset = elementRect.top;
			const elementLeftOffset = elementRect.left;
			cloneWrapper.style.width = `${elementRect.width + 0}px`;
			const clone = element.cloneNode(true);
			clone.id = `clone-${elementId}`;
			x = elementLeftOffset - clonePadding;
			y = elementTopOffset - clonePadding;
			cloneWrapper.style.transform = `translate( ${x}px, ${y}px )`;
			Array.from(clone.querySelectorAll("iframe")).forEach((child) => child.parentNode?.removeChild(child));
			cloneWrapper.appendChild(clone);
			if (compatSlot) compatSlot.appendChild(cloneWrapper);
			else if (appendToOwnerDocument) ownerDocument.body.appendChild(cloneWrapper);
			else elementWrapper?.appendChild(cloneWrapper);
		}
		let cursorLeft = event.clientX;
		let cursorTop = event.clientY;
		function over(e) {
			if (cursorLeft === e.clientX && cursorTop === e.clientY) return;
			const nextX = x + e.clientX - cursorLeft;
			const nextY = y + e.clientY - cursorTop;
			cloneWrapper.style.transform = `translate( ${nextX}px, ${nextY}px )`;
			cursorLeft = e.clientX;
			cursorTop = e.clientY;
			x = nextX;
			y = nextY;
			onDragOver?.(e);
		}
		const throttledDragOver = throttle(over, 16);
		ownerDocument.addEventListener("dragover", throttledDragOver);
		ownerDocument.body.classList.add(bodyClass);
		onDragStart?.(event);
		cleanupRef.current = () => {
			cloneWrapper.remove();
			dragImage.remove();
			setDragComponentContainer(null);
			ownerDocument.body.classList.remove(bodyClass);
			ownerDocument.removeEventListener("dragover", throttledDragOver);
			cleanupRef.current = () => {};
		};
	}
	(0, import_react.useEffect)(() => () => cleanupRef.current(), []);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(import_jsx_dev_runtime$1.Fragment, { children: [children({
		onDraggableStart: start,
		onDraggableEnd: end
	}), dragComponentContainer && createPortal(dragComponent, dragComponentContainer)] }, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 241,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1, dragImageClasses, cloneWrapperClasses, bodyClass, clonePadding;
function init_draggable() {
	return (init_draggable = __esmMin((() => {
		init_throttle();
		init_react_platform(), init_react();
		init_wp_compat_overlay_slot();
		init_style_module();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/draggable/index.tsx";
		dragImageClasses = [style_module_default["invisible-drag-image"], "components-draggable__invisible-drag-image"].filter(Boolean);
		cloneWrapperClasses = [style_module_default.clone, "components-draggable__clone"].filter(Boolean);
		bodyClass = "is-dragging-components-draggable";
		clonePadding = 0;
		try {
			Draggable.__docgenInfo = {
				"description": "`Draggable` is a Component that provides a way to set up a cross-browser\n(including IE) customizable drag image and the transfer data for the drag\nevent. It decouples the drag handle and the element to drag: use it by\nwrapping the component that will become the drag handle and providing the DOM\nID of the element to drag.\n\nNote that the drag handle needs to declare the `draggable=\"true\"` property\nand bind the `Draggable`s `onDraggableStart` and `onDraggableEnd` event\nhandlers to its own `onDragStart` and `onDragEnd` respectively. `Draggable`\ntakes care of the logic to setup the drag image and the transfer data, but is\nnot concerned with creating an actual DOM element that is draggable.\n\n```jsx\nimport { Draggable, Panel, PanelBody } from '@wordpress/components';\nimport { Icon, more } from '@wordpress/icons';\n\nconst MyDraggable = () => (\n  <div id=\"draggable-panel\">\n    <Panel header=\"Draggable panel\">\n      <PanelBody>\n        <Draggable elementId=\"draggable-panel\" transferData={ {} }>\n          { ( { onDraggableStart, onDraggableEnd } ) => (\n            <div\n              className=\"example-drag-handle\"\n              draggable\n              onDragStart={ onDraggableStart }\n              onDragEnd={ onDraggableEnd }\n            >\n              <Icon icon={ more } />\n            </div>\n          ) }\n        </Draggable>\n      </PanelBody>\n    </Panel>\n  </div>\n);\n```",
				"displayName": "Draggable",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/draggable/index.tsx",
				"methods": [],
				"props": {
					"children": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/draggable/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Children.",
						"name": "children",
						"required": true,
						"tags": {},
						"type": { "name": "(props: { onDraggableStart: (event: DragEvent<Element>) => void; onDraggableEnd: (event: DragEvent<Element>) => void; }) => Element | null" }
					},
					"appendToOwnerDocument": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/draggable/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether to append the cloned element to the `ownerDocument` body.\nBy default, elements sourced by id are appended to the element's wrapper.\n\nHas no effect when the `@wordpress/ui` compat overlay slot is in use in\nthe same document — the clone goes into the slot instead. Cross-document\ndrags fall back to this prop's regular semantics.",
						"name": "appendToOwnerDocument",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"cloneClassname": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/draggable/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Classname for the cloned element.",
						"name": "cloneClassname",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"elementId": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/draggable/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The HTML id of the element to clone on drag",
						"name": "elementId",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"onDragEnd": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/draggable/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A function called when dragging ends. This callback receives the `event`\nobject from the `dragend` event as its first parameter.",
						"name": "onDragEnd",
						"required": false,
						"tags": {},
						"type": { "name": "((event: DragEvent<Element>) => void)" }
					},
					"onDragOver": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/draggable/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A function called when the element being dragged is dragged over a valid\ndrop target. This callback receives the `event` object from the\n`dragover` event as its first parameter.",
						"name": "onDragOver",
						"required": false,
						"tags": {},
						"type": { "name": "((event: DragEvent<Element>) => void)" }
					},
					"onDragStart": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/draggable/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A function called when dragging starts. This callback receives the\n`event` object from the `dragstart` event as its first parameter.",
						"name": "onDragStart",
						"required": false,
						"tags": {},
						"type": { "name": "((event: DragEvent<Element>) => void)" }
					},
					"transferData": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/draggable/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Arbitrary data object attached to the drag and drop event.",
						"name": "transferData",
						"required": true,
						"tags": {},
						"type": { "name": "unknown" }
					},
					"__experimentalTransferDataType": {
						"defaultValue": { "value": "text" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/draggable/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The transfer data type to set.",
						"name": "__experimentalTransferDataType",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"__experimentalDragComponent": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/draggable/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Component to show when dragging.",
						"name": "__experimentalDragComponent",
						"required": false,
						"tags": {},
						"type": { "name": "ReactNode" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/draggable/stories/index.story.tsx
var import_jsx_dev_runtime, fn, _jsxFileName, meta, DefaultTemplate, Default, AppendElementToOwnerDocument;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_use_instance_id();
		init_react();
		init_build_module();
		init_draggable();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		({fn} = __STORYBOOK_MODULE_TEST__);
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/draggable/stories/index.story.tsx";
		meta = {
			component: Draggable,
			title: "Components/@wordpress-components/Utilities/Draggable",
			id: "components-draggable",
			argTypes: {
				elementId: { control: false },
				__experimentalDragComponent: { control: false }
			},
			args: {
				onDragStart: fn(),
				onDragEnd: fn(),
				onDragOver: fn()
			},
			parameters: {
				controls: { expanded: true },
				docs: {
					source: { code: "" },
					story: {
						inline: false,
						height: "250px"
					}
				},
				componentStatus: {
					status: "use-with-caution",
					whereUsed: "global",
					notes: "May be deprecated."
				}
			}
		};
		DefaultTemplate = (args) => {
			const [isDragging, setDragging] = (0, import_react.useState)(false);
			const instanceId = use_instance_id_default(DefaultTemplate);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("p", {
				style: {
					padding: "1em",
					position: "relative",
					zIndex: 1e3,
					backgroundColor: "whitesmoke"
				},
				children: ["Is Dragging? ", isDragging ? "Yes" : "No!"]
			}, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 47,
				columnNumber: 4
			}, void 0), /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
				style: {
					zIndex: 100,
					position: "relative"
				},
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
					id: `draggable-example-box-${instanceId}`,
					style: {
						display: "inline-flex",
						position: "relative"
					},
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(Draggable, {
						...args,
						elementId: `draggable-example-box-${instanceId}`,
						children: ({ onDraggableStart, onDraggableEnd }) => {
							const handleOnDragStart = (event) => {
								setDragging(true);
								onDraggableStart(event);
							};
							const handleOnDragEnd = (event) => {
								setDragging(false);
								onDraggableEnd(event);
							};
							return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)("div", {
								onDragStart: handleOnDragStart,
								onDragEnd: handleOnDragEnd,
								draggable: true,
								style: {
									alignItems: "center",
									display: "flex",
									justifyContent: "center",
									width: 100,
									height: 100,
									background: "#ddd"
								},
								children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(icon_default, { icon: more_default }, void 0, false, {
									fileName: _jsxFileName,
									lineNumber: 98,
									columnNumber: 10
								}, void 0)
							}, void 0, false, {
								fileName: _jsxFileName,
								lineNumber: 85,
								columnNumber: 9
							}, void 0);
						}
					}, void 0, false, {
						fileName: _jsxFileName,
						lineNumber: 70,
						columnNumber: 6
					}, void 0)
				}, void 0, false, {
					fileName: _jsxFileName,
					lineNumber: 63,
					columnNumber: 5
				}, void 0)
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 57,
				columnNumber: 4
			}, void 0)] }, void 0, true, {
				fileName: _jsxFileName,
				lineNumber: 46,
				columnNumber: 3
			}, void 0);
		};
		Default = DefaultTemplate.bind({});
		Default.args = {};
		AppendElementToOwnerDocument = DefaultTemplate.bind({});
		AppendElementToOwnerDocument.args = { appendToOwnerDocument: true };
		try {
			AppendElementToOwnerDocument.__docgenInfo = {
				"description": "`appendToOwnerDocument` appends the dragged element's clone to the owner\ndocument's body instead of the element's parent, which is useful when an\nancestor's stacking context (e.g. its `z-index`) would otherwise place the\nclone behind other content.",
				"displayName": "AppendElementToOwnerDocument",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/draggable/stories/index.story.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "args => {\n  const [isDragging, setDragging] = useState(false);\n  const instanceId = useInstanceId(DefaultTemplate);\n\n  // Allow for the use of ID in the example.\n  return <div>\n            <p style={{\n      padding: '1em',\n      position: 'relative',\n      zIndex: 1000,\n      backgroundColor: 'whitesmoke'\n    }}>\n                Is Dragging? {isDragging ? 'Yes' : 'No!'}\n            </p>\n            <div style={{\n      zIndex: 100,\n      position: 'relative'\n    }}>\n                <div id={`draggable-example-box-${instanceId}`} style={{\n        display: 'inline-flex',\n        position: 'relative'\n      }}>\n                    <Draggable {...args} elementId={`draggable-example-box-${instanceId}`}>\n                        {({\n            onDraggableStart,\n            onDraggableEnd\n          }) => {\n            const handleOnDragStart = (event: DragEvent) => {\n              setDragging(true);\n              onDraggableStart(event);\n            };\n            const handleOnDragEnd = (event: DragEvent) => {\n              setDragging(false);\n              onDraggableEnd(event);\n            };\n            return <div onDragStart={handleOnDragStart} onDragEnd={handleOnDragEnd} draggable style={{\n              alignItems: 'center',\n              display: 'flex',\n              justifyContent: 'center',\n              width: 100,\n              height: 100,\n              background: '#ddd'\n            }}>\n                                    <Icon icon={more} />\n                                </div>;\n          }}\n                    </Draggable>\n                </div>\n            </div>\n        </div>;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		AppendElementToOwnerDocument.parameters = {
			...AppendElementToOwnerDocument.parameters,
			docs: {
				...AppendElementToOwnerDocument.parameters?.docs,
				source: {
					originalSource: "args => {\n  const [isDragging, setDragging] = useState(false);\n  const instanceId = useInstanceId(DefaultTemplate);\n\n  // Allow for the use of ID in the example.\n  return <div>\n            <p style={{\n      padding: '1em',\n      position: 'relative',\n      zIndex: 1000,\n      backgroundColor: 'whitesmoke'\n    }}>\n                Is Dragging? {isDragging ? 'Yes' : 'No!'}\n            </p>\n            <div style={{\n      zIndex: 100,\n      position: 'relative'\n    }}>\n                <div id={`draggable-example-box-${instanceId}`} style={{\n        display: 'inline-flex',\n        position: 'relative'\n      }}>\n                    <Draggable {...args} elementId={`draggable-example-box-${instanceId}`}>\n                        {({\n            onDraggableStart,\n            onDraggableEnd\n          }) => {\n            const handleOnDragStart = (event: DragEvent) => {\n              setDragging(true);\n              onDraggableStart(event);\n            };\n            const handleOnDragEnd = (event: DragEvent) => {\n              setDragging(false);\n              onDraggableEnd(event);\n            };\n            return <div onDragStart={handleOnDragStart} onDragEnd={handleOnDragEnd} draggable style={{\n              alignItems: 'center',\n              display: 'flex',\n              justifyContent: 'center',\n              width: 100,\n              height: 100,\n              background: '#ddd'\n            }}>\n                                    <Icon icon={more} />\n                                </div>;\n          }}\n                    </Draggable>\n                </div>\n            </div>\n        </div>;\n}",
					...AppendElementToOwnerDocument.parameters?.docs?.source
				},
				description: {
					story: "`appendToOwnerDocument` appends the dragged element's clone to the owner\ndocument's body instead of the element's parent, which is useful when an\nancestor's stacking context (e.g. its `z-index`) would otherwise place the\nclone behind other content.",
					...AppendElementToOwnerDocument.parameters?.docs?.description
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { AppendElementToOwnerDocument, Default, meta as default };
