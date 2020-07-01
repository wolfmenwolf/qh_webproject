var webpack = require('webpack')
var path = require('path')

module.exports = {
    entry: {
        'pageA': './src/pageA',
        'pageB': './src/pageB'
    },

    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].common.bundle.js',
        chunkFilename: '[name].common.chunk.js'
    },

    optimization: {
        splitChunks: {
            chunks: 'async'
        },
        runtimeChunk: true
    }
}