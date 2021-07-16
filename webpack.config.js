const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: "development",
    entry: './src/app.js',
    output: {
        filename: 'app.js',
        path: `${__dirname}/dist`,
    },
    devServer: {
        port: 3000,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ],
            },
            {
                test: /\.(png|jpe?g|gif|mp3)$/i,
                use: [
                    { loader: 'file-loader' }
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            favicon: './src/assets/throwcode.png',
        }),
    ],
}