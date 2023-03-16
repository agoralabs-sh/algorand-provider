<p align="center">
  <img alt="Circular Algorand icon" src="assets/logo.svg" style="padding-top: 15px" height="64" />
</p>

<h1 align="center">
  Algorand Provider
</h1>

<p align="center">
  <a href="https://github.com/agoralabs-sh/algorand-provider/actions/workflows/lint_build_test.yml" target="_blank">
    <img src="https://github.com/agoralabs-sh/algorand-provider/actions/workflows/lint_build_test.yml/badge.svg" alt="Build, lint and test" />
  </a>
  <a href="https://github.com/agoralabs-sh/algorand-provider/actions/workflows/build_documentation.yml" target="_blank">
    <img src="https://github.com/agoralabs-sh/algorand-provider/actions/workflows/build_documentation.yml/badge.svg" alt="Build documentation" />
  </a>
  <a href="https://img.shields.io/npm/v/@agoralabs-sh/algorand-provider" target="_blank">
    <img src="https://img.shields.io/npm/v/@agoralabs-sh/algorand-provider" alt="npm" />
  </a>
</p>

<p align="center">
  Algorand provider is an interface that bridges the gap between dApps and wallets, allowing dApps to connect, and interact, with wallets in a standardized way.
</p>

### Table of contents

* [1. Installation](#-1-installation)
* [2. Documentation](#-2-documentation)
* [3. Development](#-3-development)
  * [3.1. Requirements](#31-requirements)
  * [3.2. Setup](#32-setup)
  * [3.3. Build](#33-build)
* [4. Appendix](#-4-appendix)
  * [4.1. Useful Information](#41-useful-information)
  * [4.2. Useful Commands](#42-useful-commands)
* [5. How To Contribute](#-5-how-to-contribute)
* [6. License](#-6-license)
* [7. Credits](#-7-credits)

## 📦 1. Installation

* Using npm:
```shell
npm install @agoralabs-sh/algorand-provider
```

* Using yarn:
```shell
yarn add @agoralabs-sh/algorand-provider
```

## 📚 2. Documentation

For full documentation, please see [here][documentation].

<sup>[Back to top ^][table-of-contents]</sup>

## 🛠 3. Development

### 3.1. Requirements

* Install [Yarn v1.22.5+][yarn]

<sup>[Back to top ^][table-of-contents]</sup>

### 3.2. Setup

1. Install the dependencies:
```bash
$ yarn install
```

<sup>[Back to top ^][table-of-contents]</sup>

### 3.3. Build

* To build simply run:
```bash
$ yarn build
```

This will compile the Typescript source code into a `dist/` directory.

<sup>[Back to top ^][table-of-contents]</sup>

## 📑 4. Appendix

### 4.1. Useful Information

* [ARC-0001][arc-0001]: the direction of the code leans heavily on what this ARC suggests and is in reality an extension of this ARC.

<sup>[Back to top ^][table-of-contents]</sup>

### 4.2. Useful Commands

| Commnad               | Description                                                                        |
|-----------------------|------------------------------------------------------------------------------------|
| `yarn build`          | Builds the source code into the `dist/` directory.                                 |
| `yarn run docs:build` | Builds the documentation into the `.docs/` directory.                              |
| `yarn run docs:serve` | Serves the built documentation from the `.docs/` directory.                        |
| `yarn run docs:start` | Builds and runs the documentation in a development environment with hot reloading. |
| `yarn run lint`       | Runs the linter on `.js` and `.ts` files.                                          |
| `yarn run prettier`   | Runs the prettier on `.js` and `.ts` files.                                        |
| `yarn test`           | Runs the tests.                                                                    |

<sup>[Back to top ^][table-of-contents]</sup>

## 👏 5. How To Contribute

Please read the [**Contributing Guide**][contribute] to learn about the development process.

<sup>[Back to top ^][table-of-contents]</sup>

## 📄 6. License

Please refer to the [LICENSE][license] file.

<sup>[Back to top ^][table-of-contents]</sup>

## 🎉 7. Credits

...TBC

<sup>[Back to top ^][table-of-contents]</sup>

<!-- Links -->
[arc-0001]: https://github.com/algorandfoundation/ARCs/blob/main/ARCs/arc-0001.md
[contribute]: ./CONTRIBUTING.md
[documentation]: https://algorand-provider.agoralabs.sh
[license]: ./LICENSE
[table-of-contents]: #table-of-contents
[yarn]: https://yarnpkg.com/
