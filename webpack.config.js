const path = require('path');

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
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                    // ファイルが見つかったらCSS-loader使用する
                    // loaderは下から読み込んでいく
                ],
            },
        ],
    },
}
