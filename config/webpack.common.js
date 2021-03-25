const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssWebpackPlugin = require('mini-css-extract-plugin')

const commonPaths = require('./common-paths');

const config = {
    context: commonPaths.context,
    entry: [
        'babel-polyfill',
        ...commonPaths.entryPoints,
    ],
    output: {
        filename: 'assets/js/[name].[hash:8].bundle.js',
        path: commonPaths.outputPath,
        publicPath: '/',
    },
    module: {
        rules: [{
            enforce: 'pre',
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'eslint-loader',
            options: {
                failOnWarning: false,
                failOnError: false,
            },
        },
        {
            test: /\.(js|jsx)$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
        },

        // these rules handle styles
        {
            test: /\.css$/,
            use: [{ loader: MiniCssWebpackPlugin.loader }, { loader: 'css-loader', options: { importLoaders: 1 } }],
        },
        {
            test: /\.(scss|sass)$/,
            use: [
                { loader: MiniCssWebpackPlugin.loader },
                { loader: 'css-loader', options: { importLoaders: 1 } },
                'sass-loader',
            ],
        },
        {
            test: /\.less$/,
            use: [
                { loader: MiniCssWebpackPlugin.loader },
                { loader: 'css-loader', options: { importLoaders: 1 } },
                'less-loader',
            ],
        },

        // this rule handles images
        {
            test: /\.jpe?g$|\.gif$|\.ico$|\.png$|\.svg$/,
            loader: 'file-loader',
            options: {
                name: 'assets/fonts/[name].[hash].[ext]',
            },
        },

        // the following 3 rules handle font extraction
        {
            test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'url-loader',
            options: {
                limit: 10000,
                mimetype: 'application/font-woff',
                name: 'assets/fonts/[name].[hash].[ext]',
            },
        },
        {
            test: /\.(ttf|eot)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            loader: 'file-loader',
            options: {
                name: 'assets/fonts/[name].[hash].[ext]',
            },
        },
        {
            test: /\.otf(\?.*)?$/,
            loader: 'file-loader',
            options: {
                mimetype: 'application/font-otf',
                name: 'assets/fonts/[name].[ext]',
            },
        }],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            app: commonPaths.sourcePath,
            '@api': path.resolve(__dirname, '../', 'src/api/index.js'),
            '@components': path.resolve(__dirname, '../', 'src/components/index.js'),
            '@config': path.resolve(__dirname, '../config.js'),
            '@hooks': path.resolve(__dirname, '../', 'src/hooks/index.js'),
            '@utils': path.resolve(__dirname, '../', 'src/utils/index.js'),
        },
        modules: [
            'src',
            'node_modules',
        ],
    },
    plugins: [
        new CleanWebpackPlugin({
            root: commonPaths.root,
        }),
    ],
};

module.exports = config;
