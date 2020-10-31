说明： 目前跑不起来，需要修改src/network/request.js文件中的接口地址（请加coderwhy00微信，9元购买接口。）

# supermall-mytest

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### 其他知识点补充
1. 移动端300ms延迟问题。（貌似现在没有这个问题了）
2. 图片的懒加载。 在图片真正在屏幕上展现的时候才加载，省流量，但是看到图片会变慢，感觉也没啥用
3. css单位转化插件：使用webpack插件(loader)
作用：将css中的px单位转化为vw的单位，这样就可以对不同大小的屏幕进行适配
(1)安装： npm install postcss-px-to-viewport --save-dev
(2)修改postcss.config.js文件
module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-px-to-viewport": {
        viewportWidth: 375,   // 视窗的宽度，对应的是我们设计稿的宽度（一般是750）
        viewportHeight: 667,  // 视窗的高度，对应的是我们设计稿的高度（一般是1334，也可以不配置）
        unitPrecision: 5, // 指定`px`转换为视窗单位值的小数位数（很多时候无法整除）
        viewportUnit: 'vw', // 指定需要转换成的视窗单位，建议使用vw
        selectorBlackList: ['ignore', 'tab-bar', 'tab-bar-item'], // 指定不转换为视窗单位的类
        minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
        mediaQuery: false // 允许在媒体查询中转换`px`
    }
  }
}
(3)说明：设置这个之后，有些屏幕大小不一样的屏幕可能显示会乱，因为有些没变，有些变了，导致算的不准了。需要调整一下（目前的代码还没做调整）

4. 服务器部署
（1）首先，npm run build进行打包.
   (2)   将dist中的文件拷贝到/usr/local/nginx/html即可（之前将其中的index.html删除）
  说明： 如果要向存到别的文件夹，修改conf/nginx.conf文件，
        location / {
            root   html;
            index  index.html index.htm;
        }

        这里的root  html修改为root  dist，即可访问dist文件夹

   (3)   访问localhost即可

5. 使用Vant组件
(1) 安装： npm i vant -S
(2) 自动按需引入组件
babel-plugin-import 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式。
i.  安装插件
npm i babel-plugin-import -D

ii. 在.babelrc 中添加配置
{
  "plugins": [
    ["import", {
      "libraryName": "vant",
      "libraryDirectory": "es",
      "style": true
    }]
  ]
}
(3) 在components文件夹中创建vant/index.js
// 在这里引入Vant组件中的内容

import Vue from 'vue'

import {
  Button,
  Toast,
  Dialog,
  Field,
} from 'vant'

Vue.use(Toast)
  .use(Dialog)
  .use(Field)
  .use(Button)

  (4) 在main.js中引入
// ES6模块化直接引入： 可以直接用 import 'filename'; 这种写法来执行目标文件而不引入内容， 且多书写此代码只会执行一次（即在单类模式中只实际执行一次代码， 之后每次返回（若为import xx from xx形式）第一次执行所创建的实例）

import 'components/vant'

（5）在组件中直接使用（具体使用方式需要查看官方文档）
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary" @click="clickButton">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
