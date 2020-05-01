# Modern Development Setup

A list of steps to ensure that a library or an npm package is setup with modern web development best practices.



<h2 class="header"> A Modern Development Setup Includes </h2>

- Version control
  - Git - https://git-scm.com/
- Automated CI/CD pipeline
  - Releases / deployment will be completely automated
- Code Quality w/ Tooling - to maintain solid principles/standard for writing quality code
  - ESLint
  - Prettier
- Module Support - to ensure that code can be executed on a browser and/or server side
  - CommonJS
  - ES Modules
  - UMD
- Documentation
- Demo + Example



<h2 class="header"> Build Process Cycle </h2>

- An automated sequence of tasks ran on push, tag and/or release
- Steps:
  - installation, i.e., `npm install`
    - clean install - `npm ci`
    - security audit - `npm audit`
  - lint
    - linter - eslint / stylelint
    - format code w/ prettier
  - test
    - npm test (w/ mocha or jest)
    - code coverage (nyc, codecov, coveralls)
  - build
    - transpile - Babel / TypeScript
    - pre-process - compilation + auto-prefix - Sass, Less, PostCSS
    - Uglify (minify + optimize) - uglify.js, terser
    - bundle (concat, tree shake) - webpack, rollup, browserify
    - compress (gzip)
    - extras - check bundle size, strip unused code (ts/flow/proptypes)
  - push
    - release to github
    - publish to NPM
  - deploy
    - deploy to host (heroku, surge, github pages)



<h2 class="header"> Instructions </h2>

### Setup Package Manager w/ NPM
- run `npm init` and setup a package.json file on the root

### Setup .editorconfig
- refer to https://editorconfig.org/
- complete list of EditorConfig Properties - https://github.com/editorconfig/editorconfig/wiki/EditorConfig-Properties
- how to setup:
  - https://www.youtube.com/watch?v=YbHw1VdjWbA&t=2s
  - https://www.youtube.com/watch?v=5eOCn7KTac4
  - https://www.youtube.com/watch?v=NyhIcUbyj6U

### Setup ESLint
- refer to https://eslint.org/
- look into "Standard JavaScript" in addition to AirBnb and Google standards

### Setup .gitignore
- to ignore files and/or directories that we want to exclude from being committed to git.

### Setup "Husky" for Git Hooks
- perform certain task(s) on git commit or push, like `npm test` or `npm run lint`

### Setup ESLint w/ Prettier Integration
- Setup ESLint:
  - install `eslint` package - `npm install -D eslint`
  - setup ESLint on the root level - `npx eslint --init`, which should configure a .eslintrc.json file automatically
  - go into package.json file and add a script to lint all your source code like this:
  ```json
  "script": {
    "lint": "npx eslint ./"
  }
  ```
  - now, just run `npm run lint` to list any recommended ESLint errors or warning to fix based on chosen ESLint rule set.
- To Fix ESLint Issues:
  - setup another npm script and pass in a `--fix` option to `eslint` CLI like this:
  ```json
  "script": {
    "lint:fix": "npx eslint ./ --fix"
  }
  ```
  - now, running `npm run lint:fix` should attempt to fix most, if not all ESLint issues identified automatically
- Format Code w/ Prettier:
  - While ESLint spells out the actual rule sets for standard code, prettier deals with formatting the actual code and making it look "pretty" and readable for everyone.
  - first, install prettier-eslint package - `npm install -D prettier-eslint`
  - then, install the CLI for prettier eslint - `npm install -D prettier-eslint-cli`
  - now, add another script to actually format all the source code like this:
  ```json
  "script": {
    "format": "npx prettier-eslint "./src" --write"
  }
  ```
- Format Code On Save (for VSCode only):
  - install `Prettier - Code Formatter` extension for VSCode
  - create a `.vscode` directory on the root level and create a file called `settings.json`
  - inside it add the following configuration:
  ```json
  {
    "editor.formatOnSave": true,
    "prettier.eslintIntegration": true
  }
  ```

### Add Rollup Bundler:
- a robust setup instruction - https://risanb.com/code/bundling-your-javascript-library-with-rollup/



<h2 class="header">Questions</h2>

- Why git and not any other version control?
- Are there any close alternatives to git?
- What is CI/CD pipeline?
- Why do I need to setup automated releases and deployments or CI/CD for a project?
- What other tools can I use to ensure better code quality, in addition to eslint and prettier?
- Can I use CommonJS module on the browser? What about support for Node core modules (i.e., child_process, net). How can I ensure that browser can use that as well?
- Find a tutorial for editorconfig and how to set it up on VSCode and Atom
- look into creative UIs for running pre-commit hooks (like w/ loading spinners and so on)


<style>
  .header {
    font-weight: bold; 
    border-bottom: 3px solid orange;
  }
  .center {
    text-align: center;
  }
</style>
