var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: ['babel-polyfill', 'table', 'table/style.css'],

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
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin("main.css")
    ]
};