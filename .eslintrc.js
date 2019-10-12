module.exports = {
    root : true,
    extends : 'standard',
    plugins : ['html'],
    env : { // 环境
        browser : true, // 浏览器环境
        node : true, // node环境
    },
    globals : { // 设置全局变量
        $ : true
    },
    rules : { // 用来覆盖 extends : 'standrad'中标准的规则
        indent : ['error', 4], // indent 表示缩进的规则， error表示重要性，4表示使用4个空格缩进
        'eol-last' : ['error', 'never'], // eol-last 表示最后一行要换行， never 表示不需要换行 
    }
}