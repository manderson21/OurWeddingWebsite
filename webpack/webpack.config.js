const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    entry: {
        common: './src/assets/common.blocks/index.js',
        index: './src/assets/index.blocks/index.js',
        weddingParty: './src/assets/weddingParty.blocks/index.js'
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
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: './dist/'
                        }
                    },
                    'css-loader'
                ]
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg|png|jpg|gif|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
                options: {
                    outputPath: 'images',
                }
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
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
            chunks: ['common', 'index'],
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            hash: true,
            template: "./src/weddingParty.html",
            chunks: ['common', 'weddingParty'],
            filename: "weddingParty.html"
        }),
        new HtmlWebpackPlugin({
            hash: true,
            template: "./src/registry.html",
            chunks: ['common'],
            filename: "registry.html"
        }),
        new HtmlWebpackPlugin({
            hash: true,
            template: "./src/rsvp.html",
            chunks: ['common'],
            filename: "rsvp.html"
        }),
    ]
}