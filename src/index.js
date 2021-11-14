import _ from 'lodash';
import './style.css';
import RobSax from './robsax.jpeg';
import Data from './data.xml';
import Notes from './data.csv';
import toml from './data.toml';
import yaml from './data.yaml';
import json from './data.json5';

console.log(toml.title);        // output 'TOML Example'
console.log(toml.owner.name);   // output 'Tom Preston-Warner'

console.log(yaml.title);
console.log(yaml.owner.name);

console.log(json.title);
console.log(json.owner.name);

// Let's say you want to use /my-component in another project,
//  copy or move it into the /components directory over there.
//   As long as you've installed any external dependencies and your
//    configuration has the same loaders defined, you should be good to go.


function component() {
    const element = document.createElement('div');
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    const myRobert = new Image();
    myRobert.src = RobSax;

    element.appendChild(myRobert);

    console.log(Data);
    console.log(Notes);

    // Tip
    // This can be especially helpful when implementing some sort of
    // data visualization using a tool like d3. Instead of making an
    // ajax request and parsing the data at runtime you can load it into
    // your module during the build process so that the parsed data is 
    // ready to go as soon as the module hits the browser.
    // Poggers

    // WARNING
    // only the default export of JSON modules can be used without warning
    // no warning
    // import data from './data.json'
    // warning, not allowed
    // import { foo } from './data.json'

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