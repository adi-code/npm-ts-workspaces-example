
# oclif bug

This repo presents https://github.com/oclif/oclif/issues/1036 bug

Forked from https://github.com/Quramy/npm-ts-workspaces-example
Steps to reproduce:

1. Fork https://github.com/Quramy/npm-ts-workspaces-example
2. Run `npm install oclif --save-dev`
3. Run `cd packages/ && npx oclif generate cli`
4. Replace all occurrences of `x-core` -> `core`, remove `packages/x-cli`.
5. Run `cd ../ && npm install`
6. Run `cd packages/cli && npx oclif readme`

Result:
```
$ npx oclif readme
(node:19467) [MODULE_NOT_FOUND] ModuleLoadError Plugin: @myworkspace/cli: [MODULE_NOT_FOUND] require failed to load /home/adrian/npm-ts-workspaces-example/packages/cli/dist/commands/hello/index.js: Cannot find module '@myworkspace/core/src/hello'
Require stack:
- /home/adrian/npm-ts-workspaces-example/packages/cli/dist/commands/hello/index.js
- /home/adrian/npm-ts-workspaces-example/node_modules/@oclif/core/lib/module-loader.js
- /home/adrian/npm-ts-workspaces-example/node_modules/@oclif/core/lib/config/plugin.js
- /home/adrian/npm-ts-workspaces-example/node_modules/@oclif/core/lib/config/config.js
- /home/adrian/npm-ts-workspaces-example/node_modules/@oclif/core/lib/config/index.js
- /home/adrian/npm-ts-workspaces-example/node_modules/@oclif/core/lib/command.js
- /home/adrian/npm-ts-workspaces-example/node_modules/@oclif/core/lib/index.js
- /home/adrian/npm-ts-workspaces-example/node_modules/oclif/bin/run
module: @oclif/core@1.20.4
task: toCached
plugin: @myworkspace/cli
root: /home/adrian/npm-ts-workspaces-example/packages/cli
See more details with DEBUG=*
(Use `node --trace-warnings ...` to show where the warning was created)
(node:19467) [MODULE_NOT_FOUND] ModuleLoadError Plugin: @myworkspace/cli: [MODULE_NOT_FOUND] require failed to load /home/adrian/npm-ts-workspaces-example/packages/cli/dist/commands/hello/world.js: Cannot find module '@myworkspace/core/src/world'
Require stack:
- /home/adrian/npm-ts-workspaces-example/packages/cli/dist/commands/hello/world.js
- /home/adrian/npm-ts-workspaces-example/node_modules/@oclif/core/lib/module-loader.js
- /home/adrian/npm-ts-workspaces-example/node_modules/@oclif/core/lib/config/plugin.js
- /home/adrian/npm-ts-workspaces-example/node_modules/@oclif/core/lib/config/config.js
- /home/adrian/npm-ts-workspaces-example/node_modules/@oclif/core/lib/config/index.js
- /home/adrian/npm-ts-workspaces-example/node_modules/@oclif/core/lib/command.js
- /home/adrian/npm-ts-workspaces-example/node_modules/@oclif/core/lib/index.js
- /home/adrian/npm-ts-workspaces-example/node_modules/oclif/bin/run
module: @oclif/core@1.20.4
task: toCached
plugin: @myworkspace/cli
root: /home/adrian/npm-ts-workspaces-example/packages/cli
See more details with DEBUG=*
replacing <!-- usage --> in README.md
replacing <!-- commands --> in README.md
```


# How to build TypeScript mono-repo project

[![github actions](https://github.com/Quramy/npm-ts-workspaces-example/workflows/build/badge.svg)](https://github.com/Quramy/npm-ts-workspaces-example/actions)

This repository explains how to create monorepos project using npm and TypeScript.

## ToC

- [ToC](#toc)
- [Tools](#tools)
- [Directory Structure](#directory-structure)
- [Workspaces](#workspaces)
- [Dependencies across packages](#dependencies-across-packages)
- [Resolve dependencies as TypeScript projects](#resolve-dependencies-as-typescript-projects)
- [Do we still need Lerna ?](#do-we-still-need-lerna-)
  - [Updated](#updated)
- [License](#license)

## Tools

- npm cli(v7 or later)
- TypeScript

## Directory Structure

Put each package under the `packages` directory.

```
.
├── node_modules/
├── README.md
├── package-lock.json
├── package.json
├── packages
│   ├── cli
│   │   ├── lib
│   │   │   ├── cli.d.ts
│   │   │   ├── cli.js
│   │   │   ├── cli.js.map
│   │   │   ├── main.d.ts
│   │   │   ├── main.js
│   │   │   └── main.js.map
│   │   ├── package.json
│   │   ├── src
│   │   │   ├── cli.ts
│   │   │   └── main.ts
│   │   └── tsconfig.json
│   └── core
│       ├── lib
│       │   ├── index.d.ts
│       │   ├── index.js
│       │   └── index.js.map
│       ├── package.json
│       ├── src
│       │   └── index.ts
│       └── tsconfig.json
├── tsconfig.build.json
└── tsconfig.json
```

## Workspaces

Using [npm workspaces feature](https://github.com/npm/rfcs/blob/latest/implemented/0026-workspaces.md), configure the following files:

Open `package.json` and append the `workspaces` key.

```js
/* package.json */

{
  "name": "npm-ts-workspaces-example",
  "private": true,
  ...
  "workspaces": ["packages/*"]
}
```

Exec `npm install`. After successful running, all dependencies included from each package are downloaded under the repository root `node_modules` directory.

## Dependencies across packages

In this example, the `cli` package depends on another package, `core`. So to execute (or test) `cli`, `core` packages should be installed.
But in development the `core` package is not published so you can't install it.

For example, `packages/cli/src/main.spec.ts` is a test code for `main.ts`, which depends on `packages/core/src/index.ts` .

```ts
/* packages/cli/src/main.ts.*/

import { awesomeFn } from "@myworkspace/core";

export async function main() {
  // dependencies across child packages
  const out = await awesomeFn();
  return out;
}
```

So we need to link `core` package from `cli` to execute the `cli` 's test.

Workspaces feature of npm also solves this problem. `npm i` creates sim-links of each package into the top-level `node_modules` dir.

## Resolve dependencies as TypeScript projects

As mentioned above, npm cli resolves dependencies across packages. It's enough for "runtime". However considering TypeScript sources, in other words "static", it's not.

We need to tell "cli package depends on core" to TypeScript compiler. TypeScript provides much useful feature to do this, ["Project References"](https://www.typescriptlang.org/docs/handbook/project-references.html).

First, you add `composite: true` to project-root tsconfig.json to use project references feature.

```js
/* tsconfig.json */

{
  "compilerOptions": {
    ...
    "composite": true
  }
}
```

Second, configure each package's tsconfig and configure dependencies across packages.

```js
/* packages/cli/tsconfig.json */

{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "rootDir": "src",
    "outDir": "lib"
  },
  "references": [{ "path": "../core" }]
}
```

And create a project which depends on all packages:

```js
/* tsconfig.build.json */

{
  "files": [],
  "references": [{ "path": "packages/core" }, { "path": "packages/cli" }]
}
```

Let's exec `npx tsc --build tsconfig.build.json`. The .ts files included in all packages are build at once!

## Do we still need Lerna ?

Partially, yes.

TypeScript project references and npm workspaces features resolves dependencies across each package in both runtime and compile. So we no longer need `lerna bootstrap` .

But npm cli don't have functions provided by lerna's sub command, such as `lerna version` or `lerna run`. If you want them, you can use lerna or consider introducing another CLI.

### Updated

Since npm CLI 7.7.0, we can use [`--workspaces` option](https://docs.npmjs.com/cli/v7/using-npm/workspaces#running-commands-in-the-context-of-workspaces).

```sh
# Excecute npm test in all workspaces
$ npm test --workspaces
```

This option works as well as `lerna run test` .

## License

The MIT License (MIT)
