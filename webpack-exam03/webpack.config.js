var webpack = require('webpack');
var path = require('path');
var ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    entry: {
        main: './app/index.js',
        vendor: [
            'moment',
            'lodash'
        ]
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        // webpack 3.x 에서만 가능
        // webpack 4.x 이상부턴 SplitChunksPlugin
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'vendor' // Specify the common bundle's name.
        // }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest'] // Extract the webpack bootstrap logic into manifest.js
        }),
        new ManifestPlugin({
            fileName: 'manifest.json',
            basePath: './dist/'
        })
    ],
}