# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [3.0.0](https://github.com/mdc-stencil/mdc-stencil/compare/@mdc-stencil/common@2.0.0...@mdc-stencil/common@3.0.0) (2022-10-27)


### Features

* removed unused utils ([bbaff6d](https://github.com/mdc-stencil/mdc-stencil/commit/bbaff6d565870988f2cdf920717e8034931fe030))


### BREAKING CHANGES

* This removes previously exposed utils





# 2.0.0 (2022-10-26)


### Bug Fixes

* **package:** make sure `common` is `private` ([5fa76e9](https://github.com/mdc-stencil/mdc-stencil/commit/5fa76e9691dbdb045dee3b87d02f56e6f56d9e2e))


### Code Refactoring

* rename `onReady` to `componentOnReady` ([dcf3c45](https://github.com/mdc-stencil/mdc-stencil/commit/dcf3c45af9d9fe21ba8985417dc63a48cb8880fc))


### Features

* flatten `dist` for publish ([4413de1](https://github.com/mdc-stencil/mdc-stencil/commit/4413de1abfa307e3e20f4c44db10f226582571b6))
* initial functional components ([73bb2d0](https://github.com/mdc-stencil/mdc-stencil/commit/73bb2d0b69626f804460a93b11fa125458b35413))


### BREAKING CHANGES

* Renamed exported function `onReady`
* This flattens the `dist` folder so `styles` will be published in the package root
