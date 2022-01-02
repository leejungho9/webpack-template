module.exports = {
    presets :  ['@babel/preset-env'], //preset : 따로 명시해야하는 javscript 기능을 한 번에 지원해주는 패키지
    plugins : [ // 비동기 처리를 위한 패키지
        ['@babel/plugin-transform-runtime']
    ]
}