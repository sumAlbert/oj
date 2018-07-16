const fs = require('fs');

const dirs = fs.readdirSync(`${__dirname}/public/niuke`)
  .reduce((total, current) => {
    return Object.assign(total, {
      [`niuke${current}`]: `${__dirname}/public/niuke/${current}/index.js`
    })
  }, {});
dirs.main = `${__dirname}/src/main.js`;
module.exports = {
  entry: dirs,
  mode: 'development',
  output: {
    path: __dirname + '/build',
    filename: '[name].js'
  },
  devtool: 'eval-source-map',
  devServer: {
    inline: true,//实时刷新
    contentBase: './build',
  },
  module: {
    rules: [{
      test: /(\.jsx|\.js)$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            'env', 'react'
          ]
        }
      },
      exclude: /node_modules/
    }, {
      test: /\.less$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1
          }
        },
        'less-loader'
      ]
    }, {
      test: /\.txt$/,
      loader: 'raw-loader',
      exclude: /node_modules/
    }]
  }
};

