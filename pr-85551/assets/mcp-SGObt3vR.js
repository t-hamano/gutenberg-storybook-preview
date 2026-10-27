import { n as __esmMin } from "./rolldown-runtime-CEgmsyvS.js";
import { h as init_blocks, l as Markdown, u as Meta } from "./blocks-CuFIAI47.js";
import { t as require_jsx_runtime } from "./jsx-runtime-C1RZKCc6.js";
import { i as useMDXComponents, r as init_lib } from "./react-FgZpKSX8.js";
//#region ../packages/design-system-mcp/README.md?raw
var README_default;
function init_README() {
	return (init_README = __esmMin((() => {
		README_default = "# WordPress Design System MCP Server\n\n<p class=\"callout callout-alert\">\nThe Design System MCP server is still experimental. “Experimental” means this is an early implementation subject to drastic and breaking changes.\n</p>\n\nAn [MCP (Model Context Protocol)](https://modelcontextprotocol.io/) server for the WordPress Design System. Provides AI agents with component documentation, usage examples, and design tokens.\n\nBy using the MCP server, you can be confident that your AI agents are correctly following the latest design system guidance when asking questions like:\n\n- Which components should be used for a given interaction or user interface, like a button or a dropdown\n- How to implement those components in code, following sample code from the design system documentation\n- How to implement new components following the design system styling standards with design tokens\n\nWithout the MCP server, an AI agent may produce a functional and convincing result, but there's a higher risk that its resources are out-of-date or inaccurate, and it may try to use components which are no longer recommended for use. Since AI agents are unable to read [the WordPress Gutenberg Storybook documentation](https://wordpress.github.io/gutenberg/), the MCP server provides an alternative, machine-readable interface to that same information.\n\n## Setup\n\n### Claude Code\n\n```bash\nclaude mcp add wordpress-design-system -- npx -y --ignore-scripts --min-release-age=2 @wordpress/design-system-mcp@latest\n```\n\n### OpenAI Codex\n\nThe [Codex CLI](https://developers.openai.com/codex/cli) must be installed first.\n\n```bash\ncodex mcp add wordpress-design-system -- npx -y --ignore-scripts --min-release-age=2 @wordpress/design-system-mcp@latest\n```\n\n### Cursor\n\n[![Install MCP Server](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/en-US/install-mcp?name=wordpress-design-system&config=eyJjb21tYW5kIjoibnB4IC15IC0taWdub3JlLXNjcmlwdHMgLS1taW4tcmVsZWFzZS1hZ2U9MiBAd29yZHByZXNzL2Rlc2lnbi1zeXN0ZW0tbWNwQGxhdGVzdCJ9)\n\n### Other (Claude Desktop, VS Code)\n\nAdd to your MCP client configuration (`mcp.json` or equivalent):\n\n```json\n{\n	\"mcpServers\": {\n		\"wordpress-design-system\": {\n			\"command\": \"npx\",\n			\"args\": [\n				\"-y\",\n				\"--ignore-scripts\",\n				\"--min-release-age=2\",\n				\"@wordpress/design-system-mcp@latest\"\n			]\n		}\n	}\n}\n```\n\nConfiguration instructions for common clients:\n\n- [VSCode](https://code.visualstudio.com/docs/agent-customization/mcp-servers#_configure-the-mcpjson-file)\n- [Claude Desktop](https://modelcontextprotocol.io/docs/develop/connect-local-servers#installing-the-filesystem-server)\n    - This guide is for the \"filesystem\" server, but you can substitute the `mcpServers` entry from the snippet above and the rest of the instructions still apply.\n\n## Importing the package\n\nMost people only need the setup instructions above. To embed the server in your own tooling, install the `@wordpress/design-system-mcp` package from npm:\n\n```bash\nnpm install @wordpress/design-system-mcp\n```\n\nThe package is ESM-only and requires Node.js 22.13.0 or newer. It exports `createServer`, which returns a ready-to-connect MCP server, and the `parseComponents` and `parseComponentDetail` helpers. TypeScript consumers that import the package require TypeScript 5 or newer.\n\n## Contributing\n\nThe Design System MCP server is published as the `@wordpress/design-system-mcp` package, an individual package that's part of the [Gutenberg project](https://github.com/WordPress/gutenberg). The project is organized as a monorepo. It's made up of multiple self-contained software packages, each with a specific purpose. The packages in this monorepo are published to [npm](https://www.npmjs.com/org/wordpress) and used by [WordPress](https://make.wordpress.org/core/) as well as by the broader JavaScript ecosystem.\n\nTo find out more about contributing to the Design System MCP server or Gutenberg as a whole, please read the project's main [contributor guide](https://github.com/WordPress/gutenberg/tree/HEAD/CONTRIBUTING.md).\n";
	})))();
}
//#endregion
//#region stories/design-system/mcp.mdx
function _createMdxContent(props) {
	return (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		(0, import_jsx_runtime.jsx)(Meta, { title: "Design System/Using with AI" }),
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
function init_mcp() {
	return (init_mcp = __esmMin((() => {
		import_jsx_runtime = require_jsx_runtime();
		init_lib();
		init_blocks();
		init_README();
	})))();
}
//#endregion
init_mcp();
export { MDXContent as default };
