import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { h as init_blocks, l as Markdown, u as Meta } from "./blocks-BdcQOi1H.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
//#region ../packages/components/README.md?raw
var README_default;
function init_README() {
	return (init_README = __esmMin((() => {
		README_default = "# Component Reference\n\nThis package includes a library of generic WordPress components to be used for creating common UI elements shared between screens and features of the WordPress dashboard.\n\n## Installation\n\n```bash\nnpm install @wordpress/components --save\n```\n\n_This package assumes that your code will run in an **ES2015+** environment. If you're using an environment that has limited or no support for such language features and APIs, you should include [the polyfill shipped in `@wordpress/babel-preset-default`](https://github.com/WordPress/gutenberg/tree/HEAD/packages/babel-preset-default#polyfill) in your code._\n\n## Setup\n\nMany components require the package's CSS stylesheet to be loaded.\n\n### Within WordPress\n\nTo ensure proper load order, add the `wp-components` stylesheet as a dependency of your plugin's stylesheet. See [wp_enqueue_style documentation](https://developer.wordpress.org/reference/functions/wp_enqueue_style/#parameters) for how to specify dependencies.\n\n### Outside WordPress\n\nLoad the stylesheet in your application:\n\n```js\nimport '@wordpress/components/build-style/style.css';\n```\n\nThe RTL version of the stylesheet is available at `@wordpress/components/build-style/style-rtl.css`.\n\n## Usage\n\nWithin Gutenberg, these components can be accessed by importing from the `components` root directory:\n\n```jsx\nimport { Button } from '@wordpress/components';\n\nexport default function MyButton() {\n	return <Button>Click Me!</Button>;\n}\n```\n\n### Popovers\n\nBy default, the `Popover` component will render within an extra element appended to the body of the document.\n\nIf you want to precisely control where the popovers render, you will need to use the `Popover.Slot` component.\n\nThe following example illustrates how you can wrap a component using a\n`Popover` and have those popovers render to a single location in the DOM.\n\n```jsx\nimport { Popover, SlotFillProvider } from '@wordpress/components';\nimport { MyComponentWithPopover } from './my-component';\n\nconst Example = () => {\n	<SlotFillProvider>\n		<MyComponentWithPopover />\n		<Popover.Slot />\n	</SlotFillProvider>;\n};\n```\n\n### TypeScript\n\nThis package exposes its own types for the components it exports, however it doesn't export its own types for component props. If you need to extract the props type, please use `React.ComponentProps` to get the types from the element.\n\n```tsx\nimport type { ComponentProps } from 'react';\nimport { Button } from '@wordpress/components';\n\nexport default function MyButton( props: ComponentProps< typeof Button > ) {\n	return <Button { ...props }>Click Me!</Button>;\n}\n```\n\n## Docs & examples\n\nYou can browse the components docs and examples at [https://wordpress.github.io/gutenberg/](https://wordpress.github.io/gutenberg/)\n\n## Contributing to this package\n\nThis is an individual package that's part of the Gutenberg project. The project is organized as a monorepo. It's made up of multiple self-contained software packages, each with a specific purpose. The packages in this monorepo are published to [npm](https://www.npmjs.com/) and used by [WordPress](https://make.wordpress.org/core/) as well as other software projects.\n\nTo find out more about contributing to this package or Gutenberg as a whole, please read the project's main [contributor guide](https://github.com/WordPress/gutenberg/tree/HEAD/CONTRIBUTING.md).\n\nThis package also has its own [contributing information](https://github.com/WordPress/gutenberg/tree/HEAD/packages/components/CONTRIBUTING.md) where you can find additional details.\n\n<br /><br /><p align=\"center\"><img src=\"https://s.w.org/style/images/codeispoetry.png?1\" alt=\"Code is Poetry.\" /></p>\n";
	})))();
}
//#endregion
//#region stories/docs/components/readme.mdx
function _createMdxContent(props) {
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(Meta, {
			id: "components-introduction",
			title: "Components/@wordpress-components/Introduction"
		}),
		"\n",
		(0, import_jsx_runtime.jsx)(Markdown, { children: README_default })
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
function init_readme() {
	return (init_readme = __esmMin((() => {
		import_jsx_runtime = require_jsx_runtime();
		init_lib();
		init_blocks();
		init_README();
	})))();
}
//#endregion
init_readme();
export { MDXContent as default };
