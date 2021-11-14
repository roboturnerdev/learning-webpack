const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/index.js',
        print: './src/print.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Output Management',
        }),
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};

// If you're interested in managing webpack's output in other ways, 
// the manifest would be a good place to start.
// manifest data can be extracted json using WebpackManifestPlugin
// https://github.com/shellscape/webpack-manifest-plugin
// no full example on how to use this plugin, but you can read
// on the concept page and the caching guide to find out how this ties into long term caching.
// concept page:
// https://webpack.js.org/concepts/manifest/
// caching guide:
// https://webpack.js.org/guides/caching/

// read up on HtmlWebpackPlugin repo
// https://github.com/jantimon/html-webpack-plugin

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