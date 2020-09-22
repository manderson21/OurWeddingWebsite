const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')
const fg = require('fast-glob')

module.exports = {
    entry: {
        style: fg.sync('./src/styles/**/*.css')
    },
    output: {
        path: path.join(__dirname, '../dist/'),
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['.js']
    },
    devServer: {
        contentBase: path.join(__dirname, '../dist/'),
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles/[name].bundle.css'
        }),
        new HtmlWebpackPlugin({
            hash: true,
            template: "./src/index.html",
            filename: 'index.html'
        })
    ]
}