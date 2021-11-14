const path = require('path');

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
        ],
    },
};

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