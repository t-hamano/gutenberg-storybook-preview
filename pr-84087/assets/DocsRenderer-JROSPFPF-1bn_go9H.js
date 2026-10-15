import { n as __esmMin, o as __toESM } from "./rolldown-runtime-CEgmsyvS.js";
import { n as init_preload_helper, t as __vitePreload } from "./preload-helper-CqBohFOX.js";
import { t as require_react } from "./react-Bujh4FgW.js";
import { c as HeadersMdx, h as init_blocks, i as CodeOrSourceMdx, s as Docs, t as AnchorMdx } from "./blocks-BdcQOi1H.js";
import { i as unmountElement, r as renderElement, t as init_react_18 } from "./react-18-vIJ6p-Hn.js";
//#region ../node_modules/.store/@storybook/addon-docs@10.6.1-q2ZL0AB67huD8qQa9CiruQ/node_modules/@storybook/addon-docs/dist/_browser-chunks/chunk-OATZR77O.js
var import_react, defaultComponents, ErrorBoundary, DocsRenderer;
function init_chunk_OATZR77O() {
	return (init_chunk_OATZR77O = __esmMin((() => {
		import_react = /* @__PURE__ */ __toESM(require_react(), 1);
		init_react_18();
		init_blocks();
		init_preload_helper();
		defaultComponents = {
			code: CodeOrSourceMdx,
			a: AnchorMdx,
			...HeadersMdx
		};
		ErrorBoundary = class extends import_react.Component {
			constructor() {
				super(...arguments);
				this.state = { hasError: !1 };
			}
			static getDerivedStateFromError() {
				return { hasError: !0 };
			}
			componentDidCatch(err) {
				let { showException } = this.props;
				showException(err);
			}
			render() {
				let { hasError } = this.state, { children } = this.props;
				return hasError ? null : import_react.createElement(import_react.Fragment, null, children);
			}
		};
		DocsRenderer = class {
			constructor() {
				this.render = async (context, docsParameter, element) => {
					let components = {
						...defaultComponents,
						...docsParameter?.components
					}, TDocs = Docs;
					return new Promise((resolve, reject) => {
						__vitePreload(async () => {
							const { MDXProvider } = await import("./react-FgZpKSX8.js").then((n) => (n.t(), n.n));
							return { MDXProvider };
						}, [], import.meta.url).then(({ MDXProvider }) => renderElement(import_react.createElement(ErrorBoundary, {
							showException: reject,
							key: Math.random()
						}, import_react.createElement(MDXProvider, { components }, import_react.createElement(TDocs, {
							context,
							docsParameter
						}))), element)).then(() => resolve());
					});
				}, this.unmount = (element) => {
					unmountElement(element);
				};
			}
		};
	})))();
}
//#endregion
//#region ../node_modules/.store/@storybook/addon-docs@10.6.1-q2ZL0AB67huD8qQa9CiruQ/node_modules/@storybook/addon-docs/dist/_browser-chunks/DocsRenderer-JROSPFPF.js
function init_DocsRenderer_JROSPFPF() {
	return (init_DocsRenderer_JROSPFPF = __esmMin((() => {
		init_chunk_OATZR77O();
	})))();
}
//#endregion
init_DocsRenderer_JROSPFPF();
export { DocsRenderer };
