const env = process.env.CONFIG_ENV || process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3000;

const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
    context: resolve(__dirname, 'src'),
    entry: {
        app: [
            'react-hot-loader/patch',
            `webpack-dev-server/client?http://localhost:${port}`,
            'webpack/hot/only-dev-server',
            './index.js'
        ]
    },
    output: {
        filename: 'bundle.js',
        path: resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    devServer: {
        hot: true,
        contentBase: resolve(__dirname, 'dist'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.s?css$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[path][name]__[local]--[hash:base64:5]'
                        }
                    },
                    {
                        loader: 'sass-loader'
                    },
                    {
                        loader: 'cssthemes-loader',
                        options: {
                            target: ':android',
                            ignore: [':ios']
                        }
                    },
                ],
                exclude: /node_modules/,
            }
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            '__SERVER__': false,
            '__DEV__': true // set global variable __DEV__ to true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    resolveLoader: {
        alias: {
            "cssthemes-loader": resolve(__dirname, "cssthemes-loader/index.js")
        }
    }
};
