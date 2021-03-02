// const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const { merge } = require('webpack-merge')

const baseConfig = require('./config')
const paths  = require('./paths')


module.exports = merge(baseConfig, {
    mode: 'development',
    devServer: {
        host: 'localhost',
        hot: true,
        port: 3000,
        inline: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            // ... other rules
            {
                test: /\.(js|jsx|ts|tsx)$/,
                include: paths.appSrc,
                loader: require.resolve('babel-loader'),
                options: {
                    // This is a feature of `babel-loader` for Webpack (not Babel itself).
                    // It enables caching results in ./node_modules/.cache/babel-loader/
                    // directory for faster rebuilds.
                    cacheDirectory: true,
                    plugins: ['react-hot-loader/babel'],
                },
            }
        ],
    },

})
