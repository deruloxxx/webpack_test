const path = require('path');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const htmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    entry: './src/javascripts/main.js',
    output: {
        filename: 'javascripts/main.js',
        path: path.resolve(__dirname, './dist'),
    },
    module: {
			rules: [
                {
                    test: /\.(ts|tsx)/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'ts-loader',
                        },
                    ],
                },
                {
                    test: /\.vue/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'vue-loader',
                        },
                    ],
                },
                    {
                        test: /\.js/,
                        exclude: /node_modules/,
                        use: [
                            {
                                loader: 'babel-loader',
                                options: {
                                    presets: [
                                        ['@babel/preset-env', { 'targets': '> 30%, not dead' }],
                                        '@babel/preset-react',
                                    ]
                                },
                        },
                    ],
                },
            {
                test: /\.(css|sass|scss)/,
                // ファイルを検知する
                use: [
                    {
                        loader: miniCssExtractPlugin.loader,
                    },
                    // style-loaderはbodyタグにcssを直書きする
                    {
                        loader: 'css-loader',
                        // options: {
                        //     sourcemap: false,
                        // },
                    },
                    // ファイルが見つかったらCSS-loader使用する
                    // loaderは下から読み込んでいく
                    {
                        loader: 'sass-loader',
                    },
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
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65,
                            },
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
        new VueLoaderPlugin(),
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
        new htmlWebpackPlugin({
            template: './src/templates/members/taro.pug',
            filename: 'members/taro.html',
        }),
        new CleanWebpackPlugin(),
    ],
}
