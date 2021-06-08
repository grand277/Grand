const path = require('path') // 通过node包拿到的 动态路径

module.exports = {
	entry: './src/main.js',
	output: {
		path: path.resolve(__dirname, 'dist'), // __dirname（获取当前文件所在路径）
		filename: 'bundle.js',
		publicPath: 'dist/'
	},
	module: {
		rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/i,
                loader: [
                    // compiles Less to CSS
                    "style-loader",
                    "css-loader",
                    "less-loader",
                ],
            }
        ]
    }
}
