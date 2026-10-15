# Gutenberg Storybook Preview

Builds the Storybook of a [WordPress/gutenberg](https://github.com/WordPress/gutenberg) pull request and publishes it to GitHub Pages.

## Usage

1. Open [Storybook Preview](https://github.com/t-hamano/gutenberg-storybook-preview/actions/workflows/storybook-preview.yml), click **Run workflow**, and enter the pull request number. It starts [Build Storybook Preview](https://github.com/t-hamano/gutenberg-storybook-preview/actions/workflows/build-storybook-preview.yml) on the `preview/pr-<number>` branch.
2. When the build finishes, open `https://t-hamano.github.io/gutenberg-storybook-preview/pr-<number>/`.

Run it again to update a preview after the pull request changes. Each run builds the latest commit of the pull request.

**Clean Up Previews** runs weekly and deletes the branch, caches, and preview of every closed or merged pull request. **Reset Previews** deletes every preview.

## Dependency cache

**Warm Dependency Cache** runs daily, installs Gutenberg trunk, and saves its `node_modules` to the cache. A build restores it when the pull request's `package-lock.json` matches trunk's, and runs `npm ci` otherwise.

## Security

The build job runs the pull request's code, so it gets a read-only token and no secrets. The deploy job has write access but never runs pull request code. Only deploy pull requests you trust: the published Storybook runs on this site.

The build job only restores the cache, but the pull request's code can still write cache entries. Builds therefore run on their own `preview/pr-<number>` branch: a cache written there is visible to that branch alone, so a malicious pull request cannot poison the main branch cache that other previews restore. Only Warm Dependency Cache saves to the main branch cache, and it never runs pull request code.
