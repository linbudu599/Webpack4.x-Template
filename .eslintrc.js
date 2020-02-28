module.exports = {
    root: true, //限定配置文件的使用范围，这里作用的目录是根目录
    parserOptions: {
        ecmaVersion: 7,
        sourceType: "module",
        parser: "babel-eslint"
    },
    parser: "babel-eslint",
    // 环境变量
    env: {
        //指定代码运行的宿主环境
        browser: true
    },
    plugins: ["html", "react"],
    extends: ["prettier", "react-app"],
    rules: {
        //启用额外的规则或覆盖默认的规则
        // indent: ["error", 2], //软缩进
        // quotes: ["error", "double"], //使用双引号
        // semi: ["error", "always"] //句尾强制分号结尾
        // no-console: "error",//不允许console语句
        //0 1 2
        // arrow-parens: 0,//箭头函数需要用小括号括起来
        // no-alert: 0, //禁止使用alert prompt confirm
        // no-const-assign: 禁止修改const声明的变量
        // no-dupe-keys: 创建对象字面量时不允许键重复
        // no-else-return: 如果if语句里面有return 后面不能跟else
        // no-eq-null: 禁止对null使用==或!=运算符
        // no-func-assign: 禁止重复的函数声明
        // no-nested-ternary: 禁止使用嵌套的三目运算
        // no-plusplus: 禁止使用++ --
        // no-redeclare: 禁止重复声明变量
        // no-undef: 不能有未定义的变量
        // no-var：禁用var 使用let/const
        // camelCase: 强制驼峰法命名
        // default-case: switch最后必须有default
        //
    }
};
