# NPM Package Boilerplate

![GitHub package.json version](https://img.shields.io/github/package-json/v/undirectlookable/npm-package-boilerplate.svg)
![GitHub](https://img.shields.io/github/license/undirectlookable/npm-package-boilerplate.svg)
![GitHub issues](https://img.shields.io/github/issues/undirectlookable/npm-package-boilerplate.svg)
[![Build Status](https://travis-ci.org/undirectlookable/npm-package-boilerplate.svg?branch=master)](https://travis-ci.org/undirectlookable/npm-package-boilerplate)

## Usage

```bash
# make a project folder
mkdir my_npm_package

# download source
curl -L https://api.github.com/repos/undirectlookable/npm-package-boilerplate/tarball/master | tar xz -C my_npm_package --strip-components 1
cd my_npm_package

# edit package.json
vi package.json

# install dependencies
npm install
```

## Features

* **ES6** - Transpiled by [Babel](https://babeljs.io)
* **Test** - [Jest](https://jestjs.io)
* **Lint** - [ESLint](https://eslint.org)
* **Code Style** - [StandardJS](https://standardjs.com)
* **CI** - Auto tested by [Travis CI](https://travis-ci.org)
* **CommonJS** Module in `lib/`
* **UMD** Module in _`dist/`_ by [rollup.js](https://rollupjs.org)

## Commands

- `npm run clean` - Remove `lib/` and `dist/` directory
- `npm run dev` - Watch files in `src/` and babel into `lib/`
- `npm run lint` - Run ESLint
- `npm run test` - Run test tasks
- `npm run coverage` - Run test and generate coverage report
- `npm run build` - Build CommonJS and UMD Module

## License

[MIT](https://tldrlegal.com/license/mit-license)
