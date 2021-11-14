import _ from 'lodash';

function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    return element;
}

document.body.appendChild(component());

// implicit dependencies between script tags. our index.js file
// depends on lodash being included in the page before it runs
// this is because index.js never explicitly declared a need for lodash
// it assumes _ global variable exists

// this is problematic javascript project management for many reasons
// -not immediately apparent script depends on a library
// -if dependency is missing, or not in the correct order, app will break
// -if dependency is included but not used, browser DL extra code for no reason

// luckily webpack can manage it for us

// first separate ./src from "distribution" code ./dist
// source code is what we will write and edit
// distribution code is minimized and optimized output of our 
// build process that eventually loaded in the browser

// add ./dist and move index.html into it

// need to locally install lodash to bundle it into the dependency
// run: npm i --save lodash
// when installing a package to be bundled into production bundle
// use npm i --save
// if installing package for development purposes (linter, testing libraries, etc)
// use npm i --save-dev See: npm documentation
// https://docs.npmjs.com/cli/v7/commands/npm-install

// If you are using webpack together with your React app, 
// you can have a more efficient workflow by taking advantage of webpack's HMR mechanism
// which enables you to have live editing and debugging directly from VS Code. You can 
// learn more in this Live edit and debug your React apps directly from VS Code blog post and the webpack 
// Hot Module Replacement documentation.