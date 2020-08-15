const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: './src/javascripts/main.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'javascripts/main.js'
    },
    module: {
        rules: [
            {
                test: /\.css/,
                // ファイルを検知する
                use: [
                    {
                        loader: miniCssExtractPlugin.loader,
                    },
                    // style-loaderはbodyタグにcssを直書きする
                    {
                        loader: 'css-loader',
                    }
                    // ファイルが見つかったらCSS-loader使用する
                    // loaderは下から読み込んでいく
                ],
            },
            {
                test: /\.(png|jpg)/,
                use :[
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                            name: 'images/[name].[ext]',
                        },
                    },
                ],
            },
            {
                test: /\.pug/,
                use: [
                    {
                        loader: 'html-loader',
                    },
                    {
                        loader: 'pug-html-loader',
                        options: {
                            pretty: true,
                        }
                    },
                ]
            }
        ],
    },
    plugins: [
        new miniCssExtractPlugin({
            filename: './stylesheets/main.css',
        }),
        new htmlWebpackPlugin({
            template: './src/templates/index.pug',
            filename: 'index.html',
        }),
        new htmlWebpackPlugin({
            template: './src/templates/access.pug',
            filename: 'access.html',
        }),
        new CleanWebpackPlugin(),
    ],
}
