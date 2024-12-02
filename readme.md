# Day - 23: NPM

## Topics

-[x] What is NPM?  
-[x] Understanding NPM packages  
-[x] What is React?  
-[x] What is Single page application (SPA)?  
-[x] Library vs framework  
-[x] Setting up react project using Vite  
-[x] Understanding React folder skeleton

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

- React is a JavaScript library for building user interfaces.
- It is maintained by Facebook and a community of individual developers and companies.
- React allows developers to create reusable UI components and build complex user interfaces.

### What is Single page application (SPA)?

- A single-page application (SPA) is a web application that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from the server.

### Setting up react project without using create-react-app or vite from scratch

1. Create a new directory for the project.
2. Run `npm init -y` to initialize the project with npm.
3. Install the required packages:
   - `npm install react react-dom`
   - `npm install -D @babel/core @babel/preset-env @babel/preset-react babel-loader webpack webpack-cli webpack-dev-server html-webpack-plugin`
4. Create a `webpack.config.js` file with the following configuration:
   ```js
   const path = require("path");
   const HtmlWebpackPlugin = require("html-webpack-plugin");
   ```

module.exports = {
entry: './src/index.js',
output: {
path: path.resolve(\_\_dirname, 'dist'),
filename: 'bundle.js'
},
module: {
rules: [
{
test: /\.(js|jsx)$/,
exclude: /node_modules/,
use: {
loader: 'babel-loader'
}
},
]
},
resolve: {
extensions: ['.js', '.jsx']
},
plugins: [
new HtmlWebpackPlugin({
template: './public/index.html'
}),
],
devServer: {
static: './dist',
port: 3000,
open: true,
hot: true
}
}

````

5. Create a `.babelrc` file with the following configuration:

   ```json
   {
     "presets": ["@babel/preset-env", "@babel/preset-react"]
   }
````

6. Create a `src` directory and add an `index.js` file with the following code:

```js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
```

7. Create an `App.jsx` file in the `src` directory with the following code:

```js
import React from "react";

const App = () => {
  return (
    <div>
      <h1>Hello, React!</h1>
    </div>
  );
};

export default App;
```

8. Create a `public` directory and add an `index.html` file with the following code:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React from Scratch</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
```

9. Add the following scripts to the `package.json` file:

```json
"scripts": {
"start": "webpack serve --mode development",
"build": "webpack --mode production"
}
```

10. Run `npm start` to start the development server and view the React app in the browser.
