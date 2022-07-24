const path = require('path');

module.exports = {
    //モジュールバンドルを行う起点となるファイル
    entry: {
        bundle: './src/app.ts'
    },
    output: {
        //モジュールバンドルを行った結果を出力する場所やだいる名の指定
        path: path.join(__dirname,'dist'),
        filename: '[name].js'
    },
    //モジュールとして扱いたいファイルの拡張子を指定
    resolve: {
        extensions:['.ts','.js']
    },
    devServer: [
        //webpack-dev-serverの公開フォルダ
        static: {
            directory: path.join(__dirname,"dist"),
        },
    ],
    //モジュールに適用するルールの設定
    module: {
        rules: [
            {
                //拡張子が.tsで終わるファイルに対して、TypeScriptコンパイラを適用する
                test:/\.ts$/,loader:'ts-loader'
            }
        ]
    }
}