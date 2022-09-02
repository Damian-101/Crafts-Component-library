const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
module.exports = {
    entry: './src/index.js',
    mode:'development',
    devtool: 'source-map',
    module:{
        rules:[
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    presets: ['@babel/preset-env']
                  }
                }
              },
            {
                test: /\.scss$/,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
            },

            {
              test: /\.(png|jpe?g|gif|jp2|webp)$/,
              loader: 'file-loader',
              options: {
                name: 'images/[name].[ext]'
              }
            },
            {
              test: /\.(woff|woff2|eot|ttf|otf)$/i,
              type: 'asset/resource',
            },
            {
              test: /\.css$/i,
              use: ['style-loader','css-loader'],
            },
            {
              test: /\.svg$/,
              loader: 'svg-inline-loader'
            }
        ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js','.d.ts','.json'],
      alias: {
        'react-dom': '@hot-loader/react-dom',
      },
    },
    plugins: [new MiniCssExtractPlugin({
      filename: "../types/css/[name].css"
    })],
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, 'dist/build'),
      library: {
        name: 'crafts-component-library',
        type: 'umd',
      },
    },
    externals: {
      "react": "react",
      "react-dom": "reactDom"
    }
  };
