import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_react, t as import_react } from "./react-DVttqL3M.js";
import { t as require_jsx_dev_runtime } from "./jsx-dev-runtime-CCk4SKIs.js";
import { n as use_instance_id_default, t as init_use_instance_id } from "./use-instance-id-BznKyZc1.js";
import { n as sprintf } from "./sprintf-_uhhbfMc.js";
import { n as __, t as init_build_module } from "./build-module-v04us4E2.js";
import { n as useDebounce, t as init_use_debounce } from "./use-debounce-D2hjAck8.js";
import { a as init_clsx, i as clsx } from "./iframe-Dbjzp1_m.js";
import { n as line_solid_default } from "./line-solid-yD5Yp4kD.js";
import { n as more_vertical_default } from "./more-vertical-Cyp__kS0.js";
import { n as plus_default } from "./plus-BflIATCD.js";
import { a as Popup, c as init_positioner, d as init_item, i as init_root, l as Item, m as init_item_label, n as init_trigger, o as init_popup, p as ItemLabel, r as Root, s as Positioner, t as Trigger } from "./trigger-CzbEMDRn.js";
import { n as init_stack, t as Stack } from "./stack-BHmRFw1F.js";
import { n as useEnableWpCompatOverlaySlot } from "./use-enable-wp-compat-overlay-slot-BLINu99Y.js";
import { i as D, n as init_names, o as init_colord, r as A, t as e } from "./names-C15GzMmJ.js";
import { n as init_component, t as VisuallyHidden } from "./component-DtWxfX7z.js";
import { n as init_component$1, t as View } from "./component-CkY7eURU.js";
import { n as init_component$2, t as FlexItem } from "./component-D3o0_xed.js";
import { n as init_component$3, t as FlexBlock } from "./component-Ce_iMVzG.js";
import { n as init_component$4, t as HStack } from "./component-BAVSem4V.js";
import { n as init_input_control, t as InputControl } from "./input-control-C54OF_Dl.js";
import { n as init_button, t as Button } from "./button-BqvmAVeL.js";
import { n as init_color_indicator, t as ColorIndicator } from "./color-indicator-BrZyA51_.js";
import { n as init_popover, t as Popover } from "./popover-CMT2Huei.js";
import { c as LegacyAdapter, l as init_legacy_adapter, r as init_color_palette, t as ColorPalette } from "./color-palette-DAKQlc0r.js";
import { n as init_component$5, t as VStack } from "./component-C9_4TU-Q.js";
import { n as init_component$6, t as Heading } from "./component-BhlVl1tv.js";
import { i as init_constants, n as init_custom_gradient_picker, t as CustomGradientPicker } from "./custom-gradient-picker-CfpdX4k1.js";
import { a as ColorListPicker, i as init_custom_duotone_bar, n as init_duotone_picker, o as init_color_list_picker, r as CustomDuotoneBar, t as DuotonePicker } from "./duotone-picker-CUNftYk2.js";
import { a as init_utils, i as getGradientFromCSSColors, r as getDefaultColors } from "./utils-D3WdnSXd.js";
import { n as init_gradient_picker, t as GradientPicker } from "./gradient-picker-DDsEGIqP.js";
import { i as init_component$8, n as init_component$7, r as ItemGroup, t as Item$1 } from "./component-Drkq-4_L.js";
import { r as init_build_module$1 } from "./library.story-CFsmdbdz.js";
//#region ../packages/components/src/palette-edit/style.module.scss
var indicator, name, heading, contents, palette, done, remove, style_module_default;
function init_style_module() {
	return (init_style_module = __esmMin((() => {
		indicator = "_indicator_bgzrv_46";
		name = "_name_bgzrv_52";
		heading = "_heading_bgzrv_71";
		contents = "_contents_bgzrv_82";
		palette = "_palette_bgzrv_86";
		done = "_done_bgzrv_91";
		remove = "_remove_bgzrv_95";
		style_module_default = {
			indicator,
			"name-input": "_name-input_bgzrv_52",
			name,
			heading,
			contents,
			palette,
			done,
			remove
		};
	})))();
}
//#endregion
//#region ../packages/components/src/palette-edit/index.tsx
/**
* Filters a color palette down to the colors a duotone can actually be built
* from, and normalizes each one to hex.
*
* Duotone values are turned into SVG filter matrices, so each color has to
* resolve to a concrete value. A theme palette may legitimately contain CSS
* that does not, such as `color-mix()` or `currentColor` — Twenty Twenty-Five
* ships one — and picking such a color would produce a duotone that neither the
* editor nor the front end can render.
*
* Surviving colors are normalized because the two ends disagree on syntax. The
* front end parses duotone colors with a PHP port of colord that only accepts
* hex, `rgb()` and `hsl()` (`WP_Duotone::colord_parse`), while colord in the
* editor also accepts CSS named colors such as `red`, since `namesPlugin` is
* registered. Passing a palette value straight through would let a named color
* be saved as a duotone that renders in the editor and is dropped, with a
* `_doing_it_wrong` notice, on the front end.
*
* @param colorPalette The colors to filter.
*
* @return The colors usable in a duotone, as hex.
*/
function getUsableDuotoneColors(colorPalette = []) {
	return colorPalette.flatMap((paletteColor) => {
		if (typeof paletteColor.color !== "string") return [];
		const parsed = A(paletteColor.color);
		return parsed.isValid() ? [{
			...paletteColor,
			color: parsed.toHex()
		}] : [];
	});
}
/**
* Reads the colors off a duotone element. Duotone presets can come from a
* theme's `theme.json`, so the value is not guaranteed to be an array.
*
* @param element The palette element.
*
* @return The duotone's colors, or an empty array if it has none usable.
*/
function getDuotoneColors(element) {
	const colors = element?.colors;
	return Array.isArray(colors) ? colors : [];
}
/**
* Returns the single CSS value that represents a palette element, used both for
* its swatch and for the labels that refer to it. Duotones have two colors, so
* they are represented by the same gradient the duotone swatches use.
*
* @param element The palette element.
* @param variant The kind of preset being edited.
*
* @return A CSS color or gradient string.
*/
function getElementValue(element, variant) {
	if (!element) return;
	switch (variant) {
		case "duotone": return getGradientFromCSSColors(getDuotoneColors(element), "135deg");
		case "gradient": return element.gradient;
		default: return element.color;
	}
}
/**
* Returns the hidden label for the name input of a palette element.
*
* @param variant The kind of preset being edited.
*/
function getNameInputLabel(variant) {
	switch (variant) {
		case "duotone": return __("Duotone name");
		case "gradient": return __("Gradient name");
		default: return __("Color name");
	}
}
/**
* Returns the `sprintf` format string for the remove button label.
*
* @param variant The kind of preset being edited.
*/
function getRemoveLabelFormat(variant) {
	return variant === "duotone" ? __("Remove duotone: %s") : __("Remove color: %s");
}
/**
* Returns the label for the button that adds a new palette element.
*
* @param variant The kind of preset being edited.
*/
function getAddLabel(variant) {
	switch (variant) {
		case "duotone": return __("Add duotone");
		case "gradient": return __("Add gradient");
		default: return __("Add color");
	}
}
/**
* Returns the label for the palette's options menu.
*
* @param variant The kind of preset being edited.
*/
function getOptionsLabel(variant) {
	switch (variant) {
		case "duotone": return __("Duotone options");
		case "gradient": return __("Gradient options");
		default: return __("Color options");
	}
}
/**
* Returns the label for the menu item that empties the palette.
*
* @param variant The kind of preset being edited.
*/
function getRemoveAllLabel(variant) {
	switch (variant) {
		case "duotone": return __("Remove all duotones");
		case "gradient": return __("Remove all gradients");
		default: return __("Remove all colors");
	}
}
/**
* Returns the label for the menu item that resets the palette.
*
* @param variant The kind of preset being edited.
*/
function getResetLabel(variant) {
	switch (variant) {
		case "duotone": return __("Reset duotones");
		case "gradient": return __("Reset gradient");
		default: return __("Reset colors");
	}
}
function NameInput({ value, onChange, label }) {
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(InputControl, {
		className: style_module_default["name-input"],
		size: "compact",
		label,
		hideLabelFromVision: true,
		value,
		onChange
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 227,
		columnNumber: 3
	}, this);
}
function deduplicateElementSlugs(elements) {
	const slugCounts = {};
	return elements.map((element) => {
		let newSlug;
		const { slug } = element;
		slugCounts[slug] = (slugCounts[slug] || 0) + 1;
		if (slugCounts[slug] > 1) newSlug = `${slug}-${slugCounts[slug] - 1}`;
		return {
			...element,
			slug: newSlug ?? slug
		};
	});
}
/**
* Returns a name and slug for a palette item. The name takes the format "Color + id".
* To ensure there are no duplicate ids, this function checks all slugs.
* It expects slugs to be in the format: slugPrefix + color- + number.
* It then sets the id component of the new name based on the incremented id of the highest existing slug id.
*
* @param elements   An array of color palette items.
* @param slugPrefix The slug prefix used to match the element slug.
* @param variant    The kind of preset being edited. Duotones are named
*                   "Duotone + id" and slugged with a `duotone-` stem;
*                   colors and gradients both use `color-`.
*
* @return A name and slug for the new palette item.
*/
function getNameAndSlugForPosition(elements, slugPrefix, variant = "color") {
	const stem = variant === "duotone" ? "duotone" : "color";
	const nameRegex = new RegExp(`^${slugPrefix}${stem}-([\\d]+)$`);
	const position = elements.reduce((previousValue, currentValue) => {
		if (typeof currentValue?.slug === "string") {
			const matches = currentValue?.slug.match(nameRegex);
			if (matches) {
				const id = parseInt(matches[1], 10);
				if (id >= previousValue) return id + 1;
			}
		}
		return previousValue;
	}, 1);
	return {
		name: variant === "duotone" ? sprintf(__("Duotone %d"), position) : sprintf(__("Color %d"), position),
		slug: `${slugPrefix}${stem}-${position}`
	};
}
function ColorPickerPopover({ variant, colorPalette, element, onChange, popoverProps: receivedPopoverProps, onClose = () => {} }) {
	const dismissButton = /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(VisuallyHidden, {
		as: "button",
		type: "button",
		tabIndex: -1,
		onClick: onClose,
		children: __("Close")
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 320,
		columnNumber: 3
	}, this);
	const popoverProps = (0, import_react.useMemo)(() => ({
		shift: true,
		offset: 20,
		resize: false,
		placement: "left-start",
		...receivedPopoverProps,
		className: clsx("components-palette-edit__popover", receivedPopoverProps?.className)
	}), [receivedPopoverProps]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Popover, {
		role: "dialog",
		"aria-label": sprintf(__("Edit: %s"), element.name.trim().length ? element.name : getElementValue(element, variant) || ""),
		...popoverProps,
		onClose,
		children: [
			dismissButton,
			variant === "color" && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(LegacyAdapter, {
				color: element.color,
				enableAlpha: true,
				onChange: (newColor) => {
					onChange({
						...element,
						color: newColor
					});
				}
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 365,
				columnNumber: 5
			}, this),
			variant === "gradient" && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
				className: "components-palette-edit__popover-gradient-picker",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(CustomGradientPicker, {
					__experimentalIsRenderedInSidebar: true,
					value: element.gradient,
					onChange: (newGradient) => {
						onChange({
							...element,
							gradient: newGradient
						});
					}
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 378,
					columnNumber: 6
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 377,
				columnNumber: 5
			}, this),
			variant === "duotone" && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
				className: "components-palette-edit__popover-duotone-picker",
				children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(VStack, {
					spacing: 3,
					children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(CustomDuotoneBar, {
						value: getDuotoneColors(element),
						onChange: (newColors) => {
							if (!newColors?.length) return;
							onChange({
								...element,
								colors: newColors
							});
						}
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 396,
						columnNumber: 7
					}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(ColorListPicker, {
						labels: [__("Shadows"), __("Highlights")],
						colors: colorPalette ?? [],
						value: getDuotoneColors(element),
						enableAlpha: true,
						onChange: (newColors) => {
							const [defaultDark, defaultLight] = getDefaultColors(colorPalette ?? []);
							onChange({
								...element,
								colors: [newColors[0] || defaultDark, newColors[1] || defaultLight]
							});
						}
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 408,
						columnNumber: 7
					}, this)]
				}, void 0, true, {
					fileName: _jsxFileName$1,
					lineNumber: 395,
					columnNumber: 6
				}, this)
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 391,
				columnNumber: 5
			}, this),
			dismissButton
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 349,
		columnNumber: 3
	}, this);
}
function Option({ canOnlyChangeValues, element, onChange, onRemove, popoverProps: receivedPopoverProps, variant, colorPalette }) {
	const value = getElementValue(element, variant);
	const [isEditingColor, setIsEditingColor] = (0, import_react.useState)(false);
	const [popoverAnchor, setPopoverAnchor] = (0, import_react.useState)(null);
	const popoverProps = (0, import_react.useMemo)(() => ({
		...receivedPopoverProps,
		anchor: popoverAnchor
	}), [popoverAnchor, receivedPopoverProps]);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Item$1, {
		ref: setPopoverAnchor,
		size: "small",
		children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(HStack, {
			justify: "flex-start",
			children: [
				/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Button, {
					size: "small",
					onClick: () => {
						setIsEditingColor(true);
					},
					"aria-label": sprintf(__("Edit: %s"), element.name.trim().length ? element.name : value || ""),
					style: { padding: 0 },
					children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(ColorIndicator, {
						className: style_module_default.indicator,
						colorValue: value
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 475,
						columnNumber: 6
					}, this)
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 463,
					columnNumber: 5
				}, this),
				/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(FlexBlock, { children: !canOnlyChangeValues ? /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(NameInput, {
					label: getNameInputLabel(variant),
					value: element.name,
					onChange: (nextName) => onChange({
						...element,
						name: nextName
					})
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 482,
					columnNumber: 7
				}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)("div", {
					className: style_module_default.name,
					children: element.name.trim().length ? element.name : "\xA0"
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 493,
					columnNumber: 7
				}, this) }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 480,
					columnNumber: 5
				}, this),
				!canOnlyChangeValues && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(FlexItem, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Button, {
					className: style_module_default.remove,
					size: "small",
					icon: line_solid_default,
					label: sprintf(getRemoveLabelFormat(variant), element.name.trim().length ? element.name : value || ""),
					onClick: onRemove
				}, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 503,
					columnNumber: 7
				}, this) }, void 0, false, {
					fileName: _jsxFileName$1,
					lineNumber: 502,
					columnNumber: 6
				}, this)
			]
		}, void 0, true, {
			fileName: _jsxFileName$1,
			lineNumber: 462,
			columnNumber: 4
		}, this), isEditingColor && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(ColorPickerPopover, {
			variant,
			colorPalette,
			onChange,
			element,
			popoverProps,
			onClose: () => setIsEditingColor(false)
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 519,
			columnNumber: 5
		}, this)]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 461,
		columnNumber: 3
	}, this);
}
function PaletteEditListView({ elements, onChange, canOnlyChangeValues, variant, colorPalette, popoverProps, addColorRef }) {
	const elementsReferenceRef = (0, import_react.useRef)(void 0);
	(0, import_react.useEffect)(() => {
		elementsReferenceRef.current = elements;
	}, [elements]);
	const debounceOnChange = useDebounce((updatedElements) => onChange(deduplicateElementSlugs(updatedElements)), 100);
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(VStack, {
		spacing: 3,
		children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(ItemGroup, {
			isRounded: true,
			isBordered: true,
			isSeparated: true,
			children: elements.map((element, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Option, {
				variant,
				colorPalette,
				canOnlyChangeValues,
				element,
				onChange: (newElement) => {
					debounceOnChange(elements.map((currentElement, currentIndex) => {
						if (currentIndex === index) return newElement;
						return currentElement;
					}));
				},
				onRemove: () => {
					const newElements = elements.filter((_currentElement, currentIndex) => {
						if (currentIndex === index) return false;
						return true;
					});
					onChange(newElements.length ? newElements : void 0);
					addColorRef.current?.focus();
				},
				popoverProps
			}, index, false, {
				fileName: _jsxFileName$1,
				lineNumber: 557,
				columnNumber: 6
			}, this))
		}, void 0, false, {
			fileName: _jsxFileName$1,
			lineNumber: 555,
			columnNumber: 4
		}, this)
	}, void 0, false, {
		fileName: _jsxFileName$1,
		lineNumber: 554,
		columnNumber: 3
	}, this);
}
/**
* Allows editing a palette of colors, gradients or duotones.
*
* ```jsx
* import { PaletteEdit } from '@wordpress/components';
* const MyPaletteEdit = () => {
*   const [ controlledColors, setControlledColors ] = useState( colors );
*
*   return (
*     <PaletteEdit
*       colors={ controlledColors }
*       onChange={ ( newColors?: Color[] ) => {
*         setControlledColors( newColors );
*       } }
*       paletteLabel="Here is a label"
*     />
*   );
* };
* ```
*/
function PaletteEdit({ gradients, duotones, colors = EMPTY_ARRAY, colorPalette, onChange, paletteLabel, paletteLabelHeadingLevel = 2, emptyMessage, canOnlyChangeValues, canReset, slugPrefix = "", popoverProps }) {
	useEnableWpCompatOverlaySlot();
	let variant = "color";
	if (gradients) variant = "gradient";
	else if (duotones) variant = "duotone";
	const elements = gradients ?? duotones ?? colors;
	const duotoneColorPalette = (0, import_react.useMemo)(() => getUsableDuotoneColors(colorPalette), [colorPalette]);
	const [isEditing, setIsEditing] = (0, import_react.useState)(false);
	const [editingElement, setEditingElement] = (0, import_react.useState)(null);
	const isAdding = isEditing && !!editingElement && elements[editingElement] && !elements[editingElement].slug;
	const hasElements = elements.length > 0;
	const debounceOnChange = useDebounce(onChange, 100);
	const onSelectPaletteItem = (0, import_react.useCallback)((value, newEditingElementIndex) => {
		const selectedElement = newEditingElementIndex === void 0 ? void 0 : elements[newEditingElementIndex];
		if (!!selectedElement && selectedElement[variant === "gradient" ? "gradient" : "color"] === value) setEditingElement(newEditingElementIndex);
		else setIsEditing(true);
	}, [variant, elements]);
	const onSelectDuotoneItem = (0, import_react.useCallback)((value, newEditingElementIndex) => {
		if (newEditingElementIndex !== void 0 && (duotones ?? [])[newEditingElementIndex]) setEditingElement(newEditingElementIndex);
		else setIsEditing(true);
	}, [duotones]);
	const addColorRef = (0, import_react.useRef)(null);
	const paletteLabelId = use_instance_id_default(PaletteEdit, "components-palette-edit__heading");
	return /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(View, {
		className: style_module_default.palette,
		children: [
			/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(HStack, { children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Heading, {
				className: style_module_default.heading,
				id: paletteLabelId,
				level: paletteLabelHeadingLevel,
				children: paletteLabel
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 712,
				columnNumber: 5
			}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Stack, {
				direction: "row",
				gap: "xs",
				children: [
					hasElements && isEditing && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Button, {
						className: style_module_default.done,
						size: "small",
						onClick: () => {
							setIsEditing(false);
							setEditingElement(null);
						},
						children: __("Done")
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 721,
						columnNumber: 7
					}, this),
					!canOnlyChangeValues && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Button, {
						ref: addColorRef,
						size: "small",
						isPressed: isAdding,
						icon: plus_default,
						label: getAddLabel(variant),
						onClick: () => {
							const { name, slug } = getNameAndSlugForPosition(elements, slugPrefix, variant);
							if (!!gradients) onChange([...gradients, {
								gradient: "linear-gradient(135deg, rgba(6, 147, 227, 1) 0%, rgb(155, 81, 224) 100%)",
								name,
								slug
							}]);
							else if (!!duotones) onChange([...duotones, {
								colors: getDefaultColors(duotoneColorPalette),
								name,
								slug
							}]);
							else onChange([...colors, {
								color: DEFAULT_COLOR,
								name,
								slug
							}]);
							setIsEditing(true);
							setEditingElement(elements.length);
						}
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 733,
						columnNumber: 7
					}, this),
					hasElements && (!isEditing || !canOnlyChangeValues || canReset) && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Root, {
						modal: false,
						children: [/* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Trigger, { render: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Button, {
							size: "small",
							icon: more_vertical_default,
							label: getOptionsLabel(variant),
							showTooltip: true
						}, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 790,
							columnNumber: 11
						}, this) }, void 0, false, {
							fileName: _jsxFileName$1,
							lineNumber: 788,
							columnNumber: 9
						}, this), /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Popup, {
							positioner: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Positioner, { align: "end" }, void 0, false, {
								fileName: _jsxFileName$1,
								lineNumber: 800,
								columnNumber: 11
							}, this),
							children: [
								!isEditing && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Item, {
									onClick: () => setIsEditing(true),
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(ItemLabel, { children: __("Show details") }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 809,
										columnNumber: 12
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 804,
									columnNumber: 11
								}, this),
								!canOnlyChangeValues && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Item, {
									onClick: () => {
										setEditingElement(null);
										setIsEditing(false);
										onChange();
									},
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(ItemLabel, { children: getRemoveAllLabel(variant) }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 822,
										columnNumber: 12
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 815,
									columnNumber: 11
								}, this),
								canReset && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(Item, {
									onClick: () => {
										setEditingElement(null);
										onChange();
									},
									children: /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(ItemLabel, { children: getResetLabel(variant) }, void 0, false, {
										fileName: _jsxFileName$1,
										lineNumber: 834,
										columnNumber: 12
									}, this)
								}, void 0, false, {
									fileName: _jsxFileName$1,
									lineNumber: 828,
									columnNumber: 11
								}, this)
							]
						}, void 0, true, {
							fileName: _jsxFileName$1,
							lineNumber: 798,
							columnNumber: 9
						}, this)]
					}, void 0, true, {
						fileName: _jsxFileName$1,
						lineNumber: 787,
						columnNumber: 8
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 719,
				columnNumber: 5
			}, this)] }, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 711,
				columnNumber: 4
			}, this),
			hasElements && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(View, {
				className: style_module_default.contents,
				children: [
					isEditing && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(PaletteEditListView, {
						canOnlyChangeValues,
						elements,
						onChange,
						variant,
						colorPalette: duotoneColorPalette,
						popoverProps,
						addColorRef
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 847,
						columnNumber: 7
					}, this),
					!isEditing && editingElement !== null && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(ColorPickerPopover, {
						variant,
						colorPalette: duotoneColorPalette,
						onClose: () => setEditingElement(null),
						onChange: (newElement) => {
							debounceOnChange(elements.map((currentElement, currentIndex) => {
								if (currentIndex === editingElement) return newElement;
								return currentElement;
							}));
						},
						element: elements[editingElement ?? -1],
						popoverProps
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 859,
						columnNumber: 7
					}, this),
					!isEditing && variant === "gradient" && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(GradientPicker, {
						presentation: "command-buttons",
						"aria-labelledby": paletteLabelId,
						gradients,
						onChange: onSelectPaletteItem,
						clearable: false,
						disableCustomGradients: true
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 888,
						columnNumber: 7
					}, this),
					!isEditing && variant === "duotone" && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(DuotonePicker, {
						presentation: "command-buttons",
						"aria-labelledby": paletteLabelId,
						duotonePalette: duotones ?? [],
						colorPalette: duotoneColorPalette,
						onChange: onSelectDuotoneItem,
						clearable: false,
						unsetable: false,
						disableCustomDuotone: true,
						disableCustomColors: true
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 898,
						columnNumber: 7
					}, this),
					!isEditing && variant === "color" && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(ColorPalette, {
						presentation: "command-buttons",
						"aria-labelledby": paletteLabelId,
						colors,
						onChange: onSelectPaletteItem,
						clearable: false,
						disableCustomColors: true
					}, void 0, false, {
						fileName: _jsxFileName$1,
						lineNumber: 911,
						columnNumber: 7
					}, this)
				]
			}, void 0, true, {
				fileName: _jsxFileName$1,
				lineNumber: 845,
				columnNumber: 5
			}, this),
			!hasElements && emptyMessage && /* @__PURE__ */ (0, import_jsx_dev_runtime$1.jsxDEV)(View, {
				className: style_module_default.contents,
				children: emptyMessage
			}, void 0, false, {
				fileName: _jsxFileName$1,
				lineNumber: 923,
				columnNumber: 5
			}, this)
		]
	}, void 0, true, {
		fileName: _jsxFileName$1,
		lineNumber: 710,
		columnNumber: 3
	}, this);
}
var import_jsx_dev_runtime$1, _jsxFileName$1, DEFAULT_COLOR, EMPTY_ARRAY;
function init_palette_edit() {
	return (init_palette_edit = __esmMin((() => {
		init_clsx();
		init_colord();
		init_names();
		init_react();
		init_build_module();
		init_build_module$1();
		init_use_debounce(), init_use_instance_id();
		init_root(), init_trigger(), init_popup(), init_positioner(), init_item(), init_item_label(), init_stack();
		init_button();
		init_legacy_adapter();
		init_component$3(), init_component$2();
		init_component$4();
		init_component$7(), init_component$8();
		init_component$5();
		init_gradient_picker();
		init_color_palette();
		init_duotone_picker();
		init_color_list_picker();
		init_custom_duotone_bar();
		init_utils();
		init_popover();
		init_component$6();
		init_component$1();
		init_input_control();
		init_color_indicator();
		init_component();
		init_style_module();
		init_constants();
		init_custom_gradient_picker();
		import_jsx_dev_runtime$1 = require_jsx_dev_runtime();
		_jsxFileName$1 = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/palette-edit/index.tsx";
		D([e]);
		DEFAULT_COLOR = "#000";
		EMPTY_ARRAY = [];
		try {
			deduplicateElementSlugs.__docgenInfo = {
				"description": "",
				"displayName": "deduplicateElementSlugs",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/palette-edit/index.tsx",
				"methods": [],
				"props": {},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			getNameAndSlugForPosition.__docgenInfo = {
				"description": "Returns a name and slug for a palette item. The name takes the format \"Color + id\".\nTo ensure there are no duplicate ids, this function checks all slugs.\nIt expects slugs to be in the format: slugPrefix + color- + number.\nIt then sets the id component of the new name based on the incremented id of the highest existing slug id.",
				"displayName": "getNameAndSlugForPosition",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/palette-edit/index.tsx",
				"methods": [],
				"props": {},
				"tags": {
					"param": "elements An array of color palette items.\nslugPrefix The slug prefix used to match the element slug.\nvariant The kind of preset being edited. Duotones are named\n\"Duotone + id\" and slugged with a `duotone-` stem;\ncolors and gradients both use `color-`.",
					"return": "A name and slug for the new palette item."
				}
			};
		} catch (__react_docgen_typescript_loader_error) {}
		try {
			PaletteEdit.__docgenInfo = {
				"description": "Allows editing a palette of colors, gradients or duotones.\n\n```jsx\nimport { PaletteEdit } from '@wordpress/components';\nconst MyPaletteEdit = () => {\n  const [ controlledColors, setControlledColors ] = useState( colors );\n\n  return (\n    <PaletteEdit\n      colors={ controlledColors }\n      onChange={ ( newColors?: Color[] ) => {\n        setControlledColors( newColors );\n      } }\n      paletteLabel=\"Here is a label\"\n    />\n  );\n};\n```",
				"displayName": "PaletteEdit",
				"filePath": "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/palette-edit/index.tsx",
				"methods": [],
				"props": {
					"canOnlyChangeValues": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/palette-edit/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the user can only change the color or gradient values.\nIf true, they cannot change names or delete values.",
						"name": "canOnlyChangeValues",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"canReset": {
						"defaultValue": { "value": "false" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/palette-edit/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Whether the user can reset the editor.",
						"name": "canReset",
						"required": false,
						"tags": {},
						"type": { "name": "boolean" }
					},
					"emptyMessage": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/palette-edit/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A message to show if there's nothing to edit.",
						"name": "emptyMessage",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"paletteLabel": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/palette-edit/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "A heading label for the palette.",
						"name": "paletteLabel",
						"required": true,
						"tags": {},
						"type": { "name": "string" }
					},
					"paletteLabelHeadingLevel": {
						"defaultValue": { "value": "2" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/palette-edit/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The label's heading level.",
						"name": "paletteLabelHeadingLevel",
						"required": false,
						"tags": {},
						"type": {
							"name": "enum",
							"raw": "HeadingSize",
							"value": [
								{ "value": "1" },
								{ "value": "2" },
								{ "value": "\"1\"" },
								{ "value": "3" },
								{ "value": "4" },
								{ "value": "5" },
								{ "value": "6" },
								{ "value": "\"2\"" },
								{ "value": "\"3\"" },
								{ "value": "\"4\"" },
								{ "value": "\"5\"" },
								{ "value": "\"6\"" }
							]
						}
					},
					"slugPrefix": {
						"defaultValue": { "value": "" },
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/palette-edit/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "The prefix for the element slug.",
						"name": "slugPrefix",
						"required": false,
						"tags": {},
						"type": { "name": "string" }
					},
					"popoverProps": {
						"defaultValue": null,
						"declarations": [{
							"fileName": "gutenberg-storybook-preview/packages/components/src/palette-edit/types.ts",
							"name": "TypeLiteral"
						}],
						"description": "Props to pass through to the underlying Popover component.",
						"name": "popoverProps",
						"required": false,
						"tags": {},
						"type": { "name": "Omit<Omit<Omit<WordPressComponentProps<PopoverProps, \"div\", false>, \"exit\" | \"layout\" | \"onDrag\" | \"onDragEnd\" | \"onDragStart\" | \"onAnimationStart\" | ... 51 more ... | \"ignoreStrict\"> & Pick<...>, \"ref\">, \"children\">" }
					},
					"colors": {
						"defaultValue": { "value": "[]" },
						"declarations": [
							{
								"fileName": "gutenberg-storybook-preview/packages/components/src/palette-edit/types.ts",
								"name": "TypeLiteral"
							},
							{
								"fileName": "gutenberg-storybook-preview/packages/components/src/palette-edit/types.ts",
								"name": "TypeLiteral"
							},
							{
								"fileName": "gutenberg-storybook-preview/packages/components/src/palette-edit/types.ts",
								"name": "TypeLiteral"
							}
						],
						"description": "The colors in the palette.",
						"name": "colors",
						"required": false,
						"tags": {},
						"type": { "name": "Color[]" }
					},
					"onChange": {
						"defaultValue": null,
						"declarations": [
							{
								"fileName": "gutenberg-storybook-preview/packages/components/src/palette-edit/types.ts",
								"name": "TypeLiteral"
							},
							{
								"fileName": "gutenberg-storybook-preview/packages/components/src/palette-edit/types.ts",
								"name": "TypeLiteral"
							},
							{
								"fileName": "gutenberg-storybook-preview/packages/components/src/palette-edit/types.ts",
								"name": "TypeLiteral"
							}
						],
						"description": "Runs on changing the value.",
						"name": "onChange",
						"required": true,
						"tags": {},
						"type": { "name": "((values?: Color[] | undefined) => void) | ((values?: Gradient[] | undefined) => void) | ((values?: Duotone[] | undefined) => void)" }
					},
					"gradients": {
						"defaultValue": null,
						"declarations": [
							{
								"fileName": "gutenberg-storybook-preview/packages/components/src/palette-edit/types.ts",
								"name": "TypeLiteral"
							},
							{
								"fileName": "gutenberg-storybook-preview/packages/components/src/palette-edit/types.ts",
								"name": "TypeLiteral"
							},
							{
								"fileName": "gutenberg-storybook-preview/packages/components/src/palette-edit/types.ts",
								"name": "TypeLiteral"
							}
						],
						"description": "The gradients in the palette.",
						"name": "gradients",
						"required": false,
						"tags": {},
						"type": { "name": "Gradient[]" }
					},
					"duotones": {
						"defaultValue": null,
						"declarations": [
							{
								"fileName": "gutenberg-storybook-preview/packages/components/src/palette-edit/types.ts",
								"name": "TypeLiteral"
							},
							{
								"fileName": "gutenberg-storybook-preview/packages/components/src/palette-edit/types.ts",
								"name": "TypeLiteral"
							},
							{
								"fileName": "gutenberg-storybook-preview/packages/components/src/palette-edit/types.ts",
								"name": "TypeLiteral"
							}
						],
						"description": "The duotones in the palette.",
						"name": "duotones",
						"required": false,
						"tags": {},
						"type": { "name": "Duotone[]" }
					},
					"colorPalette": {
						"defaultValue": { "value": "[]" },
						"declarations": [
							{
								"fileName": "gutenberg-storybook-preview/packages/components/src/palette-edit/types.ts",
								"name": "TypeLiteral"
							},
							{
								"fileName": "gutenberg-storybook-preview/packages/components/src/palette-edit/types.ts",
								"name": "TypeLiteral"
							},
							{
								"fileName": "gutenberg-storybook-preview/packages/components/src/palette-edit/types.ts",
								"name": "TypeLiteral"
							}
						],
						"description": "The colors offered when picking the shadows and highlights of a duotone,\nand from which the value of a newly added duotone is derived.",
						"name": "colorPalette",
						"required": false,
						"tags": {},
						"type": { "name": "Color[]" }
					}
				},
				"tags": {}
			};
		} catch (__react_docgen_typescript_loader_error) {}
	})))();
}
//#endregion
//#region ../packages/components/src/palette-edit/stories/index.story.tsx
var import_jsx_dev_runtime, fn, _jsxFileName, meta, Template, Default, Gradients, Duotones;
function init_index_story() {
	return (init_index_story = __esmMin((() => {
		init_react();
		init_palette_edit();
		import_jsx_dev_runtime = require_jsx_dev_runtime();
		({fn} = __STORYBOOK_MODULE_TEST__);
		_jsxFileName = "/home/runner/work/gutenberg-storybook-preview/gutenberg-storybook-preview/packages/components/src/palette-edit/stories/index.story.tsx";
		meta = {
			id: "components-paletteedit",
			title: "Components/@wordpress-components/PaletteEdit",
			component: PaletteEdit,
			args: { onChange: fn() },
			parameters: {
				controls: { expanded: true },
				docs: { canvas: { sourceState: "shown" } },
				componentStatus: {
					status: "recommended",
					whereUsed: "editor"
				}
			}
		};
		Template = (args) => {
			const { colors, gradients, duotones, colorPalette, onChange, ...props } = args;
			const [value, setValue] = (0, import_react.useState)(gradients ?? duotones ?? colors);
			const handleChange = (newValue) => {
				setValue(newValue);
				onChange(newValue);
			};
			if (gradients) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PaletteEdit, {
				...props,
				gradients: value ?? [],
				onChange: handleChange
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 40,
				columnNumber: 4
			}, void 0);
			if (duotones) return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PaletteEdit, {
				...props,
				duotones: value ?? [],
				colorPalette,
				onChange: handleChange
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 50,
				columnNumber: 4
			}, void 0);
			return /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(PaletteEdit, {
				...props,
				colors: value ?? [],
				onChange: handleChange
			}, void 0, false, {
				fileName: _jsxFileName,
				lineNumber: 60,
				columnNumber: 3
			}, void 0);
		};
		Default = Template.bind({});
		Default.args = {
			colors: [
				{
					color: "#1a4548",
					name: "Primary",
					slug: "primary"
				},
				{
					color: "#0000ff",
					name: "Secondary",
					slug: "secondary"
				},
				{
					color: "#fb326b",
					name: "Tertiary",
					slug: "tertiary"
				}
			],
			paletteLabel: "Colors",
			emptyMessage: "Colors are empty",
			popoverProps: {
				placement: "bottom-start",
				offset: 8
			}
		};
		Gradients = Template.bind({});
		Gradients.args = {
			gradients: [{
				gradient: "linear-gradient(135deg,rgb(255,245,203) 0%,rgb(182,227,212) 50%,rgb(51,167,181) 100%)",
				name: "Pale ocean",
				slug: "pale-ocean"
			}, {
				gradient: "linear-gradient(135deg,rgb(2,3,129) 0%,rgb(40,116,252) 100%)",
				name: "Midnight",
				slug: "midnight"
			}],
			paletteLabel: "Gradients",
			emptyMessage: "Gradients are empty"
		};
		Duotones = Template.bind({});
		Duotones.args = {
			duotones: [{
				colors: ["#8c00b7", "#fcff41"],
				name: "Purple and yellow",
				slug: "purple-yellow"
			}, {
				colors: ["#000097", "#ff4747"],
				name: "Blue and red",
				slug: "blue-red"
			}],
			colorPalette: [
				{
					color: "#ff4747",
					name: "Red",
					slug: "red"
				},
				{
					color: "#fcff41",
					name: "Yellow",
					slug: "yellow"
				},
				{
					color: "#000097",
					name: "Blue",
					slug: "blue"
				},
				{
					color: "#8c00b7",
					name: "Purple",
					slug: "purple"
				}
			],
			paletteLabel: "Duotones",
			emptyMessage: "Duotones are empty"
		};
		Default.parameters = {
			...Default.parameters,
			docs: {
				...Default.parameters?.docs,
				source: {
					originalSource: "args => {\n  const {\n    colors,\n    gradients,\n    duotones,\n    colorPalette,\n    onChange,\n    ...props\n  } = args;\n  const [value, setValue] = useState<PaletteElement[] | undefined>(gradients ?? duotones ?? colors);\n  // The story's `onChange` is a mock shared by all three variants, so it is\n  // called through a single loosely typed reference.\n  const handleChange = (newValue?: PaletteElement[]) => {\n    setValue(newValue);\n    (onChange as (values?: PaletteElement[]) => void)(newValue);\n  };\n  if (gradients) {\n    return <PaletteEdit {...props} gradients={(value ?? []) as Gradient[]} onChange={handleChange} />;\n  }\n  if (duotones) {\n    return <PaletteEdit {...props} duotones={(value ?? []) as Duotone[]} colorPalette={colorPalette} onChange={handleChange} />;\n  }\n  return <PaletteEdit {...props} colors={(value ?? []) as Color[]} onChange={handleChange} />;\n}",
					...Default.parameters?.docs?.source
				}
			}
		};
		Gradients.parameters = {
			...Gradients.parameters,
			docs: {
				...Gradients.parameters?.docs,
				source: {
					originalSource: "args => {\n  const {\n    colors,\n    gradients,\n    duotones,\n    colorPalette,\n    onChange,\n    ...props\n  } = args;\n  const [value, setValue] = useState<PaletteElement[] | undefined>(gradients ?? duotones ?? colors);\n  // The story's `onChange` is a mock shared by all three variants, so it is\n  // called through a single loosely typed reference.\n  const handleChange = (newValue?: PaletteElement[]) => {\n    setValue(newValue);\n    (onChange as (values?: PaletteElement[]) => void)(newValue);\n  };\n  if (gradients) {\n    return <PaletteEdit {...props} gradients={(value ?? []) as Gradient[]} onChange={handleChange} />;\n  }\n  if (duotones) {\n    return <PaletteEdit {...props} duotones={(value ?? []) as Duotone[]} colorPalette={colorPalette} onChange={handleChange} />;\n  }\n  return <PaletteEdit {...props} colors={(value ?? []) as Color[]} onChange={handleChange} />;\n}",
					...Gradients.parameters?.docs?.source
				}
			}
		};
		Duotones.parameters = {
			...Duotones.parameters,
			docs: {
				...Duotones.parameters?.docs,
				source: {
					originalSource: "args => {\n  const {\n    colors,\n    gradients,\n    duotones,\n    colorPalette,\n    onChange,\n    ...props\n  } = args;\n  const [value, setValue] = useState<PaletteElement[] | undefined>(gradients ?? duotones ?? colors);\n  // The story's `onChange` is a mock shared by all three variants, so it is\n  // called through a single loosely typed reference.\n  const handleChange = (newValue?: PaletteElement[]) => {\n    setValue(newValue);\n    (onChange as (values?: PaletteElement[]) => void)(newValue);\n  };\n  if (gradients) {\n    return <PaletteEdit {...props} gradients={(value ?? []) as Gradient[]} onChange={handleChange} />;\n  }\n  if (duotones) {\n    return <PaletteEdit {...props} duotones={(value ?? []) as Duotone[]} colorPalette={colorPalette} onChange={handleChange} />;\n  }\n  return <PaletteEdit {...props} colors={(value ?? []) as Color[]} onChange={handleChange} />;\n}",
					...Duotones.parameters?.docs?.source
				}
			}
		};
	})))();
}
//#endregion
init_index_story();
export { Default, Duotones, Gradients, meta as default };
