# 项目记录

1. 项目命令

   1. npm run serve  启动
   2. npm run build 构建

2. 依赖库

   1. vant
   2. vueuse/core
   3. axios
   4. underscore
   5. pinia
   6. mockjs
   7. normalize.css
   8. postcss-px-to-viewport
   9. 其余 eslint, prettier, ts 插件

3. 文件目录

   1. ```
      ├── README.md
      ├── babel.config.js
      ├── commitlint.config.js
      ├── components.d.ts
      ├── package-lock.json
      ├── package.json
      ├── postcss.config.js  //css-to-vw
      ├── public
      │   ├── favicon.ico
      │   └── index.html
      ├── push.sh // shell脚本
      ├── src
      │   ├── App.vue
      │   ├── assets // 公共资源
      │   │   ├── css
      │   │   │   ├── common.css
      │   │   │   ├── common.less
      │   │   │   ├── font.css
      │   │   │   ├── font.less
      │   │   │   ├── mixins.css
      │   │   │   └── mixins.less
      │   │   ├── font
      │   │   │   ├── DIN-Condensed-Bold-2.ttf
      │   │   │   └── pingfang-sc-medium.otf
      │   │   ├── image
      │   │   │   ├── common
      │   │   │   │   └── avatar.png
      │   │   │   ├── home
      │   │   │   │   ├── boy.png
      │   │   │   │   ├── girl.png
      │   │   │   │   ├── home-bg.png
      │   │   │   │   ├── message.png
      │   │   │   │   ├── new-two.png
      │   │   │   │   ├── pay-two.png
      │   │   │   │   ├── pic1.png
      │   │   │   │   ├── pic2.png
      │   │   │   │   ├── pic3.png
      │   │   │   │   ├── purse.png
      │   │   │   │   ├── rules.png
      │   │   │   │   ├── sign.png
      │   │   │   │   └── tip.png
      │   │   │   ├── notice
      │   │   │   │   ├── delete.png
      │   │   │   │   ├── get-price.png
      │   │   │   │   ├── nothing.png
      │   │   │   │   ├── notice-detail.png
      │   │   │   │   ├── notice.png
      │   │   │   │   ├── order.png
      │   │   │   │   ├── point.png
      │   │   │   │   └── remove.png
      │   │   │   └── shopping
      │   │   │       ├── goods-bg-logo.png
      │   │   │       ├── goods-btn.png
      │   │   │       ├── goods-item1.png
      │   │   │       ├── goods-item2.png
      │   │   │       ├── goods-item3.png
      │   │   │       ├── goods-item4.png
      │   │   │       └── pic-1.png
      │   │   └── logo.png
      │   ├── components // 公共组件
      │   │   ├── better-scroll // 可滚动组件
      │   │   │   └── index.vue
      │   │   ├── get-purse // 福利提示框
      │   │   │   └── index.vue
      │   │   ├── load-more-btn // 加载更多按钮
      │   │   │   └── index.vue
      │   │   ├── nothing-page // 没有更多页面
      │   │   │   └── index.vue
      │   │   ├── notice-item // 通知页面公用item 组件
      │   │   │   └── index.vue
      │   │   └── sheet-page // 弹出框
      │   │       └── index.vue
      │   ├── hooks // 公共 hooks
      │   │   ├── use-scroll.ts
      │   │   ├── use-title.ts
      │   │   └── use-vant.ts
      │   ├── main.ts
      │   ├── router
      │   │   └── index.ts
      │   ├── service // axios二次封装
      │   │   ├── config
      │   │   │   └── index.ts
      │   │   ├── index.ts
      │   │   └── request
      │   │       ├── index.ts
      │   │       └── type.ts
      │   ├── shims-vue.d.ts
      │   ├── store // pinia store
      │   │   ├── index.ts
      │   │   └── module
      │   │       └── user.ts
      │   ├── types // 公共类型文件
      │   │   └── index.ts
      │   ├── utils // 工具类
      │   │   ├── format.ts
      │   │   ├── localCache.ts
      │   │   └── uuid.ts
      │   └── views // 视图
      │       ├── front-home
      │       │   ├── components
      │       │   │   ├── home-banner.vue
      │       │   │   ├── home-item.vue
      │       │   │   └── home-task.vue
      │       │   ├── index.vue
      │       │   └── resource
      │       │       ├── data.ts
      │       │       └── types.ts
      │       ├── front-login
      │       │   └── index.vue
      │       ├── front-notice
      │       │   ├── components
      │       │   │   ├── notice-active.vue
      │       │   │   └── notice-order.vue
      │       │   ├── index.vue
      │       │   └── resource
      │       │       ├── data.ts
      │       │       └── types.ts
      │       └── front-shopping
      │           ├── components
      │           │   ├── shopping-banner.vue
      │           │   └── shopping-item.vue
      │           ├── index.vue
      │           └── resource
      │               ├── data.ts
      │               └── types.ts
      ├── tsconfig.json
      └── vue.config.js
      ```

   2. 
