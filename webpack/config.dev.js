// const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin')
const { merge } = require('webpack-merge')

const baseConfig = require('./config')

module.exports = merge(baseConfig, {
    // mode: 'development',
    // module: {
    //     rules: [
    //         // ... other rules
    //         {
    //             test: /\.[jt]sx?$/,
    //             exclude: /node_modules/,
    //             use: [
    //                 // ... other loaders
    //                 {
    //                     loader: require.resolve('babel-loader'),
    //                     options: {
    //                         // ... other options
    //                         plugins: [require.resolve('react-refresh/babel')],
    //                     },
    //                 },
    //             ],
    //         },
    //     ],
    // },
    // plugins: [new ReactRefreshWebpackPlugin()],
})
