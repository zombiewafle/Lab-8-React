const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "development", 
    entry: "./src/index.js", 
    output: {
        filename: "main.bundle.js", 
        path: path.resolve(__dirname, "bundle")
    }, 

    plugins:[
        new CleanWebpackPlugin(), 
        new MiniCssExtractPlugin({filename: "main.bundle.css"}), 
        new HtmlWebpackPlugin({
            template: "./src/index.html", 
        }), 
    ], 

    module: {
        rules: 
        [
            {
                test: /\.css$/i, 
                use: 
                [
                    MiniCssExtractPlugin.loader, 
                    "css-loader", 
                ], 
            },

            {
                test: /\.m?js$/, 
                exclude: /(node_modules)/, 
                use: 
                {
                    loader: 'babel-loader', 
                    options: 
                    {
                        presets: 
                        [
                            '@babel/preset-env', 
                            '@babel/preset-react'
                        ],
                    },
                },
            },


            {
                test:/\.html$/, 
                use:
                [
                    "html-loader"
                ], 
            }, 

            {
                test: /\.(png|jpe?g|gif|mp4)$/i,
                loader: 'file-loader',
                options: {
                  outputPath: 'images',
                },
              }, 
        ], 
    }, 
}; 
