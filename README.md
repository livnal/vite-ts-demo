# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

## vue-wait
https://github.com/f/vue-wait/blob/master/README.md

## 手动引入了eslint和prettier
https://juejin.cn/post/7021464780242321439
根目录创建：
.eslintrc.js(eslint配置)；
.eslintignore(配置eslint需要忽略的文件或文件夹)；
.prettierrc.js(prettier配置)；
.prettierignore (配置prettier需要忽略的文件或文件夹)；

## 手动配置“@”路径别名
http://lavecoral.me/vue/262.html
安装：npm i @types/node -D
修改vite.config.js(引入resolve并添加resolve配置)
修改tsconfig.json(添加compilerOptions)

##  引入element-plus
vue3.0不支持element-ui，需要使用element-plus
在mine.ts中手动引入