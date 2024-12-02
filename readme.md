# Day - 23: NPM

## Topics

-[x] What is NPM?  
-[x] Understanding NPM packages  
-[ ] What is React?  
-[ ] What is Single page application (SPA)?  
-[ ] Library vs framework  
-[ ] Setting up react project using Vite  
-[ ] Understanding React folder skeleton

### What is NPM?

- NPM stands for Node Package Manager.
- It is a default package manager for JavaScript programming language.
- It is used to install, share, and distribute code and manage dependencies in a project.

### Libraries vs Frameworks

- A library is a collection of functions and methods that can be used in a project.
- A framework is a collection of libraries that are used to build a project. It provides a structure and guidelines to build a project.

### Understanding NPM packages

- To initialize a project with npm, run `npm init` in the terminal. This will create a `package.json` file.
  or
- To initialize a project with npm, run `npm init -y` in the terminal. This will create a `package.json` file with default values.

- To install a package, run `npm install <package-name>`. This will install the package and add it to the `dependencies` in the `package.json` file.

- To uninstall a package, run `npm uninstall <package-name>`. This will remove the package and update the `dependencies` in the `package.json` file.

- To install a package as a development dependency, run `npm install <package-name> --save-dev`. This will install the package and add it to the `devDependencies` in the `package.json` file.

- To install a package globally, run `npm install -g <package-name>`. This will install the package globally on the system.

- To update a package, run `npm update <package-name>`. This will update the package to the latest version.

- To update all packages, run `npm update`. This will update all packages to the latest version.

- To list all installed packages, run `npm list`. This will list all installed packages in the project.

- To search for a package, run `npm search <package-name>`. This will search for the package in the npm registry.

- To install a package from a specific version, run `npm install <package-name>@<version>`. This will install the package from the specified version.

### Dependencies vs Dev dependencies

- Dependencies are the packages that are required for the project to run in production.
- Dev dependencies are the packages that are required for the project to run in development. These packages are not required in production.

### webpack and babel

- Webpack is a module bundler that takes modules with dependencies and generates static assets representing those modules.
- Babel is a JavaScript compiler that converts ECMAScript 2015+ code into a backwards-compatible version of JavaScript in current and older browsers or environments.

### What is React?

### What is Single page application (SPA)?

### Setting up react project without using create-react-app or vite from scratch

1. Create a new directory for the project.
2. Run `npm init -y` to initialize the project with npm.
3. Install the required packages:
   - `npm install react react-dom`
   - `npm install -D @babel/core @babel/preset-env @babel/preset-react babel-loader webpack webpack-cli webpack-dev-server html-webpack-plugin`