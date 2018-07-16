const fs = require('fs');
const dirs = fs.readdirSync(`${__dirname}/public/niuke`)
  .reduce((total, current) => {
    return Object.assign(total, {
      [`niuke${current}`]: `${__dirname}/public/niuke/${current}/index.js`
    })
  }, {});
module.exports = {
  entry: dirs,
  mode: 'development',
  output: {
    path: __dirname + '/build',
    filename: '[name].js'
  },
  devtool: 'source-map',
  devServer: {
    inline: true,//实时刷新
    contentBase: './build',
  },
  module: {
    rules: [{
      test: /\.txt$/,
      loader: 'raw-loader',
      exclude: /node_modules/
    }]
  }
};

