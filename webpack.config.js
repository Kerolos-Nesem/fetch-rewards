
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
entry: path.join(__dirname, './client/index.js'),
output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
},
module: {
    rules: [
      {
        test: /\.jsx?/, 
        exclude: path.resolve('node_modules'),
        use: [
          {
            loader: 'babel-loader', 
            options: {
              presets: [
                '@babel/preset-env', 
                '@babel/preset-react'
              ]
            }, 
          }, 
        ]
      },
      {
        test: /\.s[ac]ss$/i, //.scss //.sass
        use: [
          'style-loader', 
          'css-loader',
          'sass-loader' 
        ]
      },
       {
            test: /\.(png|jp(e*)g|svg|gif)$/,
            use: ["file-loader"]
        }
    ]
  }, 
  plugins: [
    new HtmlWebpackPlugin({template: path.join(__dirname, './client/index.html')})
  ],
  devServer: {
    historyApiFallback: true,
    static: {
        publicPath: '/build',
        directory: path.resolve('build'),
      },
    port: 8080,    
  },
}