/*
 * @Descripttion: ilovejwl
 * @version: 1.0.0
 * @Author: ilovejwl
 * @Date: 2019-09-17 23:11:03
 * @LastEditTime: 2019-09-17 23:17:14
 * @LastEditors: ilovejwl
 */
const express = require ('express');
const bodyParser = require ('body-parser');
const webpack = require ('webpack');
const webpackDevMiddleware = require ('webpack-dev-middleware');
const webpackHotMiddleware = require ('webpack-hot-middleware');
const WebpackConfig = require ('./webpack.config');

const app = express ();
const compiler = webpack (WebpackConfig);

app.use (
  webpackDevMiddleware (compiler, {
    publicPath: '/__build__/',
    stats: {
      colors: true,
      chunks: false,
    },
  })
);

app.use (webpackHotMiddleware (compiler));

app.use (express.static (__dirname));

app.use (bodyParser.json ());
app.use (bodyParser.urlencoded ({extended: true}));

const router = express.Router ();

router.get ('/simple/get', function (req, res) {
  res.json ({
    msg: `hello world`,
  });
});

app.use (router);

const port = process.env.PORT || 8080;
module.exports = app.listen (port, () => {
  console.log (`Server listening on http://localhost:${port}, Ctrl+C to stop`);
});
