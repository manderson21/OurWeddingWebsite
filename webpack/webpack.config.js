const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: {
        common: './src/assets/common.blocks/index.js'
    },
    output: {
        path: path.join(__dirname, '../dist/'),
        filename: '[name]/[name].bundle.js'
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
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name]/[name].bundle.css'
        }),
        new HtmlWebpackPlugin({
            hash: true,
            template: "./src/index.html",
            filename: 'index.html'
        })
    ]
}