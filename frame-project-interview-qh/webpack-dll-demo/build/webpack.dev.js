const path = require('path');
const webpack = require('webpack');
const {smart} = require('webpack-merge');
const webpackCommonConf = require('./webpack.common');
const {srcPath,distPath} = require('./paths');

// 第一，引入 DllReferencePlugin
const DllReferencePlugin = require('webpack/lib/DllReferencePlugin');

module.exports = smart(webpackCommonConf,{
    mode:'development',
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:['babel-loader'],
                include:srcPath,
                exclude:/node_modules/
            }
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
              // window.ENV = 'production'
              ENV:JSON.stringify('development')
        }),
        new DllReferencePlugin({
            manifest:require(path.join(distPath,'react.manifest.json'))
        })
    ],
    devServer:{
        port:8080,
        progress:true,  // 显示打包的进度条
        contentBase:distPath,//根目录
        open:true,//自动打开浏览器
        compress:true,//启动gzip压缩

        //设置代理
        proxy:{
             // 将本地 /api/xxx 代理到 localhost:3000/api/xxx
             '/api': 'http://localhost:3000',

             // 将本地 /api2/xxx 代理到 localhost:3000/xxx
             '/api2': {
                 target: 'http://localhost:3000',
                 pathRewrite: {
                     '/api2': ''
                 }
             }
        }
    }
})