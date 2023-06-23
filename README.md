# Nunchi websites

This mono-repository holds the different websites maintained by Nunchi.

## Structure

This project relies on:
- [Next.js](https://nextjs.org) as front-end framework;
- [Elastic UI](https://eui.elastic.co) as React UI kit;
- [Markdoc](https://markdoc.io) for Markdown documentation;
- [Turborepo](https://turborepo.org) for orchestrating packages.

The `domains` directory holds all the domains handled by this repository.

The `packages/base` directory holds everything shared across websites, such as:
- Next.js config, components, layouts, and pages;
- Markdoc nodes and tags.

## Installation

After cloning the repository, run the following command to install dependencies:
```bash
$ npm install
```

## Running websites

You can run all websites at once with:
```bash
$ npx turbo run dev
```

Or run a single website by specifying its domain name:
```bash
$ npx turbo run dev --scope <domain>
```

Supported `domain`:
- [`nunchi.studio`](https://nunchi.studio) (port [:3300](http://localhost:3300))
- [`go.nunchi.studio`](https://go.nunchi.studio) (port [:3301](http://localhost:3301))

## Wishlist

Here's a list of improvements I will probably not be working on as soon as I
would like, but should be nice to have to improve community contributions:

- **Better CI/CD.** All markdown files are copied/pasted using a local script
  from other repositories whereas this should be more automated (see `Makefile`).
  For example, when a new version of a product is released, automatically create
  a pull request including all markdown files and assets such as images.
- **Improve SEO.** Meta tags should be better across layouts and pages.
- **One place for common images.** Currently, some images are copied/pasted
  across all domains, such as logos and error images. It could be nice to not
  have duplicates and have only place to hold or sync them.
- **Proper navigation on mobile.** Navigation on mobile should be able to open
  and close, wheras now it's always opened.
- **Product logos.** There is no product logos for now. Just let me know if you
  want to create one!

## License

Repository licensed under the [MIT License](./LICENSE.md).
