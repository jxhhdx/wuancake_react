const resolve = require('path').resolve
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')  // 在内存中生成html页面的插件
// 创建一个插件的实例对象
const htmlplugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, './src/index.html'),// 源文件
    filename: 'index.html'
})

module.exports = {
    mode: 'development', // development production 
    plugins: [
        htmlplugin
    ],
    module: {
        // 所有第三方模块的配置规则
        rules: [// 第三方匹配规则
            { test: /\.js|jsx$/, use: 'babel-loader', exclude: /node_modules/ }
        ]
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src')
        },
        extensions: ['.js', '.jsx', '.json', '.css', '.png']
    },


}