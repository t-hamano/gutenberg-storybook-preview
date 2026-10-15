import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { h as init_blocks, l as Markdown, u as Meta } from "./blocks-BdcQOi1H.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
//#region ../packages/widget-primitives/src/stories/icons.md?raw
var icons_default;
function init_icons() {
	return (init_icons = __esmMin((() => {
		icons_default = "# Icons\n\n<div class=\"callout callout-alert\">\nThis package is still experimental. “Experimental” means this is an early implementation subject to drastic and breaking changes.\n</div>\n\nAn icon authored as a React element can only travel inside its metadata module, so any surface that wants to draw it has to import and execute the module first. The icon reference makes the declaration travel as data instead: `widget.json` names an icon registered in the site's icon registry, and the name flows through the build manifest, the server registry, and the REST record like every other identity field.\n\n## Referencing\n\nOne nullable string field. A registered icon name is `collection/icon-name`:\n\n```json\n{ \"icon\": \"core/calendar\" }\n```\n\nA metadata module may still declare a rendered element; the resolved reference wins over it, and the element stands when the record carries none. The widgets in this repository all declare references.\n\n## Registering the resolver\n\nThe reference is data behind a REST entity, so what the application registers is a resolver rather than a value. It registers one resolver, before anything renders, closing over whatever data layer it owns:\n\n```ts\nregisterIconResolver( async ( reference ) => {\n	const icon = await fetchIconRecord( reference );\n	return icon ? toElement( icon.content ) : null;\n} );\n```\n\nThe resolver returns a renderable element or `null`. First registration wins.\n\n## Resolution\n\n`useWidgetTypes` resolves references while it assembles each `WidgetType`, at the same boundary that resolves field-type names. Hosts receive a renderable `icon` and never see a reference; anything that is not an element is dropped at the boundary. The _WidgetRender / With Icon Reference_ story shows the seam in isolation.\n\n## When the reference does not resolve\n\nAn unregistered name, a missing resolver, or a resolver failure degrades to no icon; the metadata module's element stands when there is one. A widget referencing an icon its application cannot resolve degrades; it does not break.\n";
	})))();
}
//#endregion
//#region ../packages/widget-primitives/src/stories/icons.mdx
function _createMdxContent(props) {
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(Meta, {
			id: "widget-primitives-icons",
			title: "Widgets/Primitives/Icons"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(Markdown, { children: icons_default })
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
function init_icons$1() {
	return (init_icons$1 = __esmMin((() => {
		import_jsx_runtime = require_jsx_runtime();
		init_lib();
		init_blocks();
		init_icons();
	})))();
}
//#endregion
init_icons$1();
export { MDXContent as default };
