const path = require('path') 
const HtmlPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')



module.exports = {
    //파일을 읽기 시작하는 진입점 설정
    entry : './js/main.js', 

    //결과물을 반환하는 설정
    output : {
    //  path : path.resolve(__dirname, 'dist'),
    //  filename : 'main.js',
     clean : true
    },
    module : {
        rules : [
            {
                test : /\.s?css$/,    //.scss .css로 끝나는 모든 파일
                use : [
                    'style-loader',   //해석된 내용을 html에 style 태그에 넣어줌
                    'css-loader' ,    //javascript에서 css파일을 해석하는 용도
                    'postcss-loader', //해석된 내용에 공급업체 접두사를 붙여줌
                    'sass-loader'     //javascript에서 scss파일을 해석하는 용도

                ]
            },
            {
                test: /\.js$/,
                use : [
                    'babel-loader' //js로 끝나는 확장자를 babel이 적용될 수 있게 만드는 패키지
                ]
            }
        ]
    },

    //번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
    plugins : [
        new HtmlPlugin({
            template : './index.html'
        }),
        new CopyPlugin({
            patterns : [
                {  from : 'static'}
            ]
        })
       
    ],

    devServer : {
        host : 'localhost'
    }
}