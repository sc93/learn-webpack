const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');

module.exports = {
    mode : 'development',
    entry: {
        app : './src/index.js',
        // another : './src/another-module.js',
    },
    devtool : 'inline-source-map',
    devServer : {
        contentBase : './dist',
    },
    output: {
        // filename: 'main.js',
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath : './',
        chunkFilename: '[name].bundle.js'
    },
    // optimization: {
    //     splitChunks : {
    //         chunks : 'all',
    //     },
    // },
    plugins : [
        new HtmlWebpackPlugin({
            title : 'Output Management',
        }),
        new CleanWebpackPlugin(),
        new ManifestPlugin(),
    ],
};