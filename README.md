# TypeScript Widget Samples

## Description
Samples of dojo widgets written in `TypeScript`.

For information about TypeScript, see the [TypeScript website](https://www.typescriptlang.org/docs/tutorial.html). It has a Quickstart tutorial as well as a *Handbook* section that contains lots of details about different parts of TypeScript.

## Setting up the development environment

* In the root directory run `npm install`. This installs all the necessary packages. The included packages are:
  * **typescript**: The package contains everything needed to get intellisense working in your IDE as well as the TypeScript compiler
  * **tslint**: Syntax checker for TypeScript
  * **dojo-typings**: [typings](https://github.com/dojo/typings) for Dojo. They allow Dojo modules to be imported and used in compile time checks

* Building and linting code
  * To compile the TypeScript files, run `npm run build:ts`. This uses the `tsc` command to compile the TypeScript to javascript. It uses `tsconfig.json` for compiler options. For more information on `tsconfig.json` see the [TypeScript website](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
  * To compile the TypeScript files and set a watcher that recompiles when a TypeScript file is changed, run `npm run watch:ts`
  * To check code syntax run `npm run tslint`. It uses `tslint.json` for the rules.