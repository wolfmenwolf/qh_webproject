const path = require('path')

module.exports = {
    mode: 'production',
    entry: {
        app: './src/app.js',
        index: './src/index.js'
    },
    output: {
        filename: '[name].[chunkhash:5].js',
        path: path.resolve('./dist')
    },
    optimization: {
        minimize: false,
        runtimeChunk: 'single'
    }
}