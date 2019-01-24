var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// var aa = {
//   plugins: [
//     new MiniCssExtractPlugin({
//       // Options similar to the same options in webpackOptions.output
//       // both options are optional
//       filename: "[name].css",
//       chunkFilename: "[id].css"
//     })
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: [
//           {
//             loader: MiniCssExtractPlugin.loader,
//             options: {
//               // you can specify a publicPath here
//               // by default it use publicPath in webpackOptions.output
//               publicPath: '../'
//             }
//           },
//           "css-loader"
//         ]
//       }
//     ]
//   }
// }

var config = {
    entry: {
        main: './main'
    },
    output: {
        path: path.join(__dirname, './dist'),
        publicPath: '/dist/',
        filename: 'main.js'
    },
    module: {
        rules: [
        	{
        		test: /\.css$/,
        		use: [
        			'style-loader',
        			'css-loader'
        		]
        	},
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        css: MiniCssExtractPlugin.extract({
                            use: 'css-loader',
                            fallback: 'vue-style-loader'
                        })
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: MiniCssExtractPlugin.extract({
                    use: 'css-loader',
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader?limit=1024'
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin("main.css")
    ]
};

module.exports = config;