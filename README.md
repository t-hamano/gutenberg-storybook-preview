# Gutenberg Storybook Preview

Builds the Storybook of a [WordPress/gutenberg](https://github.com/WordPress/gutenberg) pull request and publishes it to GitHub Pages.

## Usage

1. Open **Actions → Storybook Preview → Run workflow** and enter the pull request number.
2. When the run finishes, open `https://t-hamano.github.io/gutenberg-storybook-preview/pr-<number>/`.

Run it again to update a preview after the pull request changes. **Reset Previews** deletes every preview.

## Setup

Under **Settings → Pages**, set the source to **Deploy from a branch**, branch `gh-pages`, folder `/ (root)`. The branch exists after the first run.

## Security

The build job runs the pull request's code, so it gets a read-only token and no secrets. The deploy job has write access but never runs pull request code. Only deploy pull requests you trust: the published Storybook runs on this site.
