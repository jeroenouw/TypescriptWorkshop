# TypeScript Workshop

## Beginner

### Serve

```shell
# Install TypeScript globally
npm i -g typescript

# For vscode users, please install this extension: 'TypeScript Toolbox'

# To install all dependencies
npm install

# To run the project (installs CLI and executes 'saxum')
npm start

```

### Part 1: Migrate this [CLI](https://en.wikipedia.org/wiki/Command-line_interface) from JavaScript to TypeScript

1.  Add a `tsconfig.json` in the root of our project.

2.  Add json to our tsconfig file, we need some `CompilerOptions`:
```json 
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "lib": ["es6", "es2015", "dom"],
    "outDir": "lib",
    "rootDir": "src",
    "types": ["node"],
    "declaration": true,
    "strict": true,
    "esModuleInterop": true,
    "resolveJsonModule": true
  }
}
```

3.  We need some additional `devDependencies`, install them by running `npm i @types/node @liftr/tscov ts-node typescript --save-dev`.

4.  Add a new script called `build` in our `package.json`. Make sure this command compiles our TypeScript to JavaScript.

5.  Update the `start` script with the new `build` script in `package.json`. Change it to: `"start": "npm run build && npm run global",`.

6.  Add a final script called `tscov` in `package.json`, so we can measure the type coverage. It's value should be: `"tscov --min-coverage 90",`.

7.  Change the extension of the `index.js` file to a TypeScript extension.

Now you should have type-checking inside this file. 

### Part 2: Refactor the index.ts file

1.  Please add explicitly types to the variables.

2.  Also add them to the parameters.

3.  Change our ES5 syntax imports to the ES6 variant.

4.  Add a class called `Generator` and export it. Now call the class at the bottom of the file. 

5.  Move our `generateFile` function in the class and refactor it to a method. Make the method `private` and give it a `void` return type.

6.  Move the `generateFile` method call to the inside of the constructor and place `this.` before it.

Now run `npm start`.  
If you done everything correctly, then there should be a compiled `index.js` inside the `lib` folder. Also there should be a `SAXUM.md` generated inside the docs folder after running the project.
  