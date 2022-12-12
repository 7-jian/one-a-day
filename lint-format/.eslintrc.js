
// https://github.com/AlloyTeam/eslint-config-alloy
module.exports = {
  extends: [
    'alloy',
    'alloy/vue',
  ],
  env: {
    // 你的环境变量（包含多个预定义的全局变量）
    //
    // browser: true,
    // node: true,
    // mocha: true,
    // jest: true,
    // jquery: true
  },
  globals: {
    // 你的全局变量（设置为 false 表示它不允许被重新赋值）
    //
    // myGlobal: false
  },
  // 具体规则配置
  // off或0--关闭规则
  // warn或1--开启规则，警告级别(不会导致程序退出)
  // error或2--开启规则，错误级别(当被触发的时候，程序会退出)
  rules: {
    // 自定义你的规则
    //https://eslint.vuejs.org/rules/max-attributes-per-line.html
    "vue/max-attributes-per-line": ["error", {
      "singleline": {
        "max": 1
      },      
      "multiline": {
        "max": 1,
        // https://ota-meshi.github.io/eslint-plugin-lodash-template/rules/max-attributes-per-line.html
        // 允许属性和标记名在同一行
        "allowFirstLine": false
      }
    }]
  },
};