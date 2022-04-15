# Turborepo starter

This is an official Coxwave v1 starter monorepo.

## What's inside?

This monorepo uses [Yarn](https://classic.yarnpkg.com/lang/en/) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `@apps/docs`: a [Next.js](https://nextjs.org) app
- `@apps/web`: another [Next.js](https://nextjs.org) app
- `@apps/ui`: a stub React component library shared by both `web` and `docs` applications
- `@packages/config`: `eslint` configurations (and `jest` configurations will be placed here too)
- `@packages/hooks`: contains useful react hooks
- `@packages/tsconfig`: `tsconfig.json`s used throughout the monorepo
- `@packages/types`: useful types which are generally used throughout the monorepo
- `@packages/ui`: a React component library shared by `next.js` applications (which should be compiled by [next-transpile-modules](https://github.com/martpie/next-transpile-modules) before ussed)
- `@packages/utils`: contains useful utility functions (eg, logger, sleep, ...)

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This monorepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

## Setup

This repository can be installation to your own repository when you clicked `Use this template` button

### Installation

We use yarn berry with [Plug'n'Play](https://yarnpkg.com/features/pnp) feature.

```sh
yarn
```

### Preparation

We use [husky](https://typicode.github.io/husky/#/) for managing pre-commit hook.
There's nothing you must hvae done except running this simple script:

```sh
yarn prepare
```

### Build

To build all apps and packages, run the following command:

```sh
yarn build
```

To build librarys including packages and sdks, run the floowing command:

```sh
yarn lib:build
```

or simply

```sh
yarn lib
```

### Develop

To develop all apps and packages, run the following command:

To develop `@apps/*`, run the following command:

```sh
yarn apps:dev
```

or simply

```sh
yarn apps
```

### Upgrade Dependencies

To upgrade all packages in this monorepo,
try this command:

```sh
yarn upgrade-interactive
```

## Useful Links

Learn more about the power of Turborepo:

- [Pipelines](https://turborepo.org/docs/features/pipelines)
- [Caching](https://turborepo.org/docs/features/caching)
- [Remote Caching (Beta)](https://turborepo.org/docs/features/remote-caching)
- [Scoped Tasks](https://turborepo.org/docs/features/scopes)
- [Configuration Options](https://turborepo.org/docs/reference/configuration)
- [CLI Usage](https://turborepo.org/docs/reference/command-line-reference)
