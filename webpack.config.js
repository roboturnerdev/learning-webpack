const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};

// resolve alias
// used to import or require certain modules more easily
// i.e. alias a bunch of commonly used src/ files
// resolve: {
//     alias: {
//         Utilities$: path.resolve(__dirname, 'src/utilities/'),
//         Templates$: path.resolve(__dirname, 'src/templates/'),
//     },
// },
// now instead of using relative paths when importing like:
// import Utility from '../../utilities/utility';
// use alias
// import Utility from 'Utilities/utility';
// a trailing $ can be added to given object's keys to signify an exact match

// Module loaders can be chained. Each loader in the chain 
// applies transformations to the processed resource. A chain is 
// executed in reverse order. The first loader passes its result 
// (resource with applied transformations) to the next one, and so forth. 
// Finally, webpack expects JavaScript to be returned by the last loader in the chain.

// config file allows far more flexibility than cli
// can:
// specify loader rules
// plugins
// resolve options
// see configuration documentation
// https://webpack.js.org/configuration/