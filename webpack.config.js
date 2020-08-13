const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js'
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
        ],
    },
    plugins: [
        new miniCssExtractPlugin(),
        new htmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
}
