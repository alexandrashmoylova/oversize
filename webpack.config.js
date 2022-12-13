const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    output: {
        path: path.join(__dirname, '/build'),
        filename: 'index.bundle.js',
        assetModuleFilename: 'assets/[name].[ext]',
    },
    devServer: {
        port: 3015,
        watchContentBase: true,
        hot: true,
        open: true
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: __dirname + '/src/sendmail.php', // откуда
                    to: __dirname + '/build' // куда
                },
                {
                    from: __dirname + '/src/phpmailer', // откуда
                    to: __dirname + '/build/phpmailer' // куда
                },
            ]
        })
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.svg/,
                type: 'asset/resource'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
    },
};