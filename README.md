## js-preprocess-loader

### Introduction

`js-preprocess-loader`支持在js文件中使用条件编译功能, 如果需要vue2的，请[点击此处](https://www.npmjs.com/package/vue2-preprocess-loader).

条件编译支持：
```
@ifdef 变量名
  code...
@endif
```
```
@ifndef 变量名
  code...
@endif
```

### Example
```
import Vue from 'vue'
import App from './App.vue'
// @ifdef web
import _ from 'lodash'
console.log(_)
// @endif

Vue.config.productionTip = false

// @ifdef h5
console.log('h5') 
// @endif

new Vue({
  render: h => h(App),
}).$mount('#app') 

```

### Install

```
npm install js-preprocess-loader
```

### Usage

需要在项目运行的时候添加临时node的环境变量`platform`

```
vue.config.js

module.exports = { 
    chainWebpack: config => {
      config.module
        .rule("preprocess")
        .test(/\.js$/)
        .use('preprocess')
        .loader('js-preprocess-loader')
        .end()
    }
  }
```
```
package.json
"scripts": {
    "serve": "cross-env platform=h5 vue-cli-service serve"
}
```
### All directives
```
@ifdef 变量 /@endif 包括定义其中的代码块
@ifndef 变量 /@endif 不包括其中定义的代码块
```

