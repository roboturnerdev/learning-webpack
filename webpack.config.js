const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    mode: 'development'
};

// config file allows far more flexibility than cli
// can:
// specify loader rules
// plugins
// resolve options
// see configuration documentation
// https://webpack.js.org/configuration/