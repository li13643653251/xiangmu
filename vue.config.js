module.exports = {
	// 公共路径(必须有的)
	publicPath: "./",
	// 输出文件目录
	outputDir: "dist",
	// 静态资源存放的文件夹(相对于ouputDir)
	assetsDir: "assets",
    devServer: {
        open: true,
        //代理配置
        proxy: {
            '/apis': {
                target: 'http://f7c5bfd0f24a.ngrok.io', //设置你调用的接口域名和端口号 别忘了加http       
                changeOrigin:true,    
                pathRewrite: {
                    '^/apis': '' // 这里理解成用‘/api’代替target里面的地址，后面组件中我们掉接口时直接用api代替 比如我要调用'http://localhost:8090/users'，直接写‘/api/users’即可        
                }
            }
        }
    }
}
// http://e7136ce828e2.ngrok.io 
