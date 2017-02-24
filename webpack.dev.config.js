'use strict';

require('dotenv').load();

var webpack = require('webpack');

module.exports = {

    devtool: '#cheap-module-eval-source-map',

    entry: [
        'webpack-dev-server/client?http://0.0.0.0:52273',
        'webpack/hot/dev-server',
        './src/index.js'
    ],

    output: {
        path: __dirname + '/public',
        filename: 'bundle.js',
        publicPath: '/'
    },

    devServer: {
        inline: true,
        hot: true,
        filename: 'bundle.js',
        publicPath: '/',
        historyApiFallback: {
            rewrites: [
                { from: /^\/hello$/, to: '/public/hello.html' }
            ]
        },
        contentBase: './public',
        proxy: {
            "**": "http://localhost:3000"
        }
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],

    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel?' + JSON.stringify({
                    cacheDirectory: true
                })],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style!css'
            },
            {
                test: /\.less$/,
                loader: "style!css!less"
            },
            {
                test: /\.(png|gif|jpg|jpeg)$/,
                loader: 'file-loader'
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.svg$/,
                loader: 'babel!svg-react'
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "url-loader?limit=10000&mimetype=application/font-woff" },
            {
                test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader"
            }
        ]
    }
};
