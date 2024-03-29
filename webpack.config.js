var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "index_bundle.js"
    },
    module: {
        rules:[
            {test: /\.(js|jsx)$/, use: ["babel-loader"]},
            {test: /\.css$/, use: ["style-loader", "css-loader"]}
        ]
    },
    mode: 'development',
    plugins: [
        new htmlWebpackPlugin({
            template: "./src/index.html"
        })
    ]
};