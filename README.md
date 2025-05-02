# simple-calculator

## Task

Link to the task:_[https://docs.google.com/document/d/1zpXXeSae-BlcxPKgw3DhxZA92cspVailrPYoaXSYrW8/edit?tab=t.0]_

## How to run the app

1. Install dependencies: npm install
2. Build the application: npm run build
3. Run the application: npm run start

note: 'npm run lint' runs ESLint to check all .js files in the project directory for syntax errors and code style issues.

## Project Structure
dist/                # Compiled output files
node_modules/        # Installed dependencies
src/                 # Source code
├── assets/          # Static assets (e.g., images, icons)
│   └── favicon.png
├── components/      # UI components
│   ├── Input.js
│   ├── Keyboard.js
│   └── ThemeBtn.js
├── styles/          # Styling files
│   ├── index.css
│   ├── index.css.map
│   └── index.scss
└── index.js         # Main JS entry point of the application
.gitignore           # Git ignore rules
eslint.config.mjs    # ESLint configuration
index.html           # HTML template
package.json         # Project metadata and npm scripts
package-lock.json    # Dependency lock file
webpack.config.js    # Webpack bundler configuration
README.md            # Project documentation
