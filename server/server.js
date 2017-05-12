import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from '../webpack.config.dev';

const port = 3000;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
}).listen(port, 'localhost', function (err) {
  if (err) {
    return console.error(err);
  }
  console.log(`Started on port ${port}`);
});
