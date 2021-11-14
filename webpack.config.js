const path = require('path');
const toml = require('toml');
const yaml = require('yamljs');
const json5 = require('json5');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],    // style then css, or errors
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(csv|tsv)$/i,
                use: ['csv-loader'],
            },
            {
                test: /\.xml$/i,
                use: ['xml-loader'],
            },
            {
                test: /\.toml$/i,
                type: 'json',
                parser: {
                    parse: toml.parse,
                },
            },
            {
                test: /\.yaml$/i,
                type: 'json',
                parser: {
                    parse: yaml.parse,
                },
            },
            {
                test: /\.json5$/i,
                type: 'json',
                parser: {
                    parse: json5.parse,
                },
            },
        ],
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