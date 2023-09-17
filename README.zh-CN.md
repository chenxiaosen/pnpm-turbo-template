# TurboRepo + PNPM 架构项目

这个项目采用了 TurboRepo + PNPM 的架构，使用了以下技术栈：
Vite + Vue3 + Typescript + Tailwindcss + Pinia + Vue-Router + Axios + Vitest + Eslint + Prettier + Vue-Composition-Api

## 快速开始

```shell
pnpm i -w
pnpm run dev --filter=playground
```

## 项目结构

本项目主要分为包（packages）和应用（apps）两部分。

**包（Packages）**

Packages 主要包括 ui 和 utils，它们都是供外部使用的。其中，UI 包含了自定义的组件，这样我们就可以在多个项目间共享一套组件和配置，而不需要复制或者从 npm 私有库更新，只需要保持代码同步即可。

packages 里的 ui 开发方式主要参考这个系列文章，很强!! [Vite+TypeScript 从零搭建 Vue3 组件库](https://juejin.cn/column/7118932817119019015)

**应用（Apps）**

Apps 主要包括 playground 项目（用于组件使用示例）和其他实际项目。

这种框架非常适合 **微前端**，具体的部署方案可以参考我之前写的一篇[文章](https://www.chenxiaosen.com/%E5%BE%AE%E5%89%8D%E7%AB%AF%E5%A4%9A%E9%A1%B9%E7%9B%AE%E9%83%A8%E7%BD%B2)，这里不再赘述。如果你有任何问题，可以随时通过 chenxiaosencn@gmail.com 联系我。

## 项目优势

1. 减少构建部署成本，特别是时间成本。
2. 降低应用维护成本，提高代码复用率，只需一次开发，就能在任何地方使用。
3. 共享配置，共享依赖，统一依赖版本。
4. 采用 pnpm 进行包管理，可以实现全局复用，只需要一个共有的 node_modules，依赖可以扁平化，还可以指定 registry 以加快安装速度。
5. 采用 Turborepo 进行包构建，可以实现增量构建，优化任务调度，配合 Docker 构建缓存。

## 如何使用

### 1. 初步准备

项目使用 pnpm 进行管理，所以需要首先在本地安装 pnpm。最快的安装方法是使用 npm：

```shell
npm install -g pnpm
```

更多的安装方法可以参考 [pnpm 安装](https://pnpm.io/zh/installation)。

### 2. 代码规范和 VSCode 设置

请确保在 VSCode 插件库中安装了以下插件：

- ESLint
- Prettier - Code formatter
- Vue Language Features (Volar)
- TypeScript Vue Plugin (Volar)
- Tailwind CSS IntelliSense

### 3. Volar 设置

根据 Vue 官方推荐，在 vscode 中使用 [volar](https://cn.vuejs.org/guide/scaling-up/tooling.html#ide-support) 插件进行代码高亮语法提示和 vue 单文件的 TS 语法服务。

如果你已经安装了 [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)，请先禁用它，然后安装 [volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) 和 [TypeScript Vue Plugin](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin)，然后重启 vscode。

确保项目的 .vscode 文件夹中包含了 extensions.json 文件（已经提交到 shell 项目，拉取代码后对比文件内容，如果不存在，自行补充）：

```json
{
  "recommendations": ["Vue.volar", "Vue.vscode-typescript-vue-plugin"]
}
```

设置 Volar Takeover Mode 来支持 Vue 的 TS 语言服务，在 "插件" 中搜索 @builtin typescript，点击齿轮按钮，然后点击 Disable。

具体操作可以参考 https://cn.vuejs.org/guide/typescript/overview.html#volar-takeover-mode。

### 4. 开发流程

在你的本地机器上克隆仓库：

```shell
git clone git@github.com:chenxiaosen/pnpm-turbo-template.git
```

切换到项目目录：

```shell
cd turbo-pnpm
```

安装项目依赖：

```shell
pnpm install
```

启动开发服务器：

```shell
pnpm run dev --filter=playground
```

现在，你应该可以在浏览器中打开 `http://localhost:3000` 来查看项目。

### 5. 构建项目

当你的代码准备好进行部署时，你可以运行以下命令来构建生产版本：

```shell
pnpm run build --filter=playground
```

这将创建一个 `dist` 目录，其中包含用于生产环境的优化后的文件。

## 贡献

如果你有任何问题或者建议，欢迎提交 issue 或者 pull request。

## 许可证

项目在 MIT 许可下发布。有关详细信息，请参阅[`LICENSE`](./LICENSE) 文件。

## 联系方式

如果你有任何问题或者建议，欢迎通过 chenxiaosencn@gmail.com 或者提交 issue 来联系我。

希望你会喜欢这个项目，如果你觉得这个项目有帮助的话，记得给我们一个 star ⭐️，非常感谢！
