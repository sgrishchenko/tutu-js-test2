var webpack = require('webpack');

module.exports = {
    entry: ['babel-polyfill', 'table'],

    resolve: {
        modulesDirectories: ['.', 'node_modules']
    },

    output: {
        path: "dist",
        filename: 'main.js'
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    }
};