# TurboRepo + PNPM Architecture Project

**Read this in other languages: [简体中文](README.zh-CN.md).**

This project adopts the TurboRepo + PNPM architecture and uses the following tech stack:

Vite + Vue3 + Typescript + Tailwindcss + Pinia + Vue-Router + Axios + Vitest + Eslint + Prettier + Vue-Composition-Api

## Quick Start

```shell
pnpm i -w
pnpm run dev --filter=playground
```

## Project Structure

The project mainly consists of two parts: packages and apps.

**Packages**

Packages include 'ui' and 'utils', which are for external use. The 'ui' package contains custom components, allowing us to share a set of components and configurations across multiple projects without the need to copy or update from a private npm library - just keep the code synchronized.

**Apps**

Apps mainly include the 'playground' project (for component usage examples) and other real projects.

This framework is very suitable for **Micro Frontends**. For specific deployment plans, you can refer to my previous [article](https://www.chenxiaosen.com/%E5%BE%AE%E5%89%8D%E7%AB%AF%E5%A4%9A%E9%A1%B9%E7%9B%AE%E9%83%A8%E7%BD%B2). If you have any questions, feel free to contact me at chenxiaosencn@gmail.com.

## Project Advantages

1. Reduce build deployment costs, especially time costs.
2. Lower application maintenance costs, increase code reuse, develop once, use anywhere.
3. Share configurations, share dependencies, unify dependency versions.
4. Use pnpm for package management, which can achieve global reuse, require only one common node_modules, flatten dependencies, and specify registry to speed up installation.
5. Use Turborepo for package construction, which can achieve incremental construction, optimize task scheduling, and cooperate with Docker build cache.

## How to Use

### 1. Initial Preparation

The project uses pnpm for management, so first, you need to install pnpm locally. The quickest way to install is using npm:

```shell
npm install -g pnpm
```

More installation methods can be found in [pnpm installation](https://pnpm.io/zh/installation).

### 2. Code Standards and VSCode Settings

Make sure you have installed the following plugins in the VSCode plugin library:

- ESLint
- Prettier - Code formatter
- Vue Language Features (Volar)
- TypeScript Vue Plugin (Volar)
- Tailwind CSS IntelliSense

### 3. Volar Settings

According to the official Vue recommendation, use the [volar](https://cn.vuejs.org/guide/scaling-up/tooling.html#ide-support) plugin in vscode for code highlighting syntax prompts and TS syntax services for Vue single files.

If you have installed [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur), please disable it first, then install [volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) and [TypeScript Vue Plugin](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin), and then restart vscode.

Ensure that the project's .vscode folder contains the extensions.json file (already submitted to the shell project, compare the file content after pulling the code, if it does not exist, supplement it yourself):

```json
{
  "recommendations": ["Vue.volar", "Vue.vscode-typescript-vue-plugin"]
}
```

Set Volar Takeover Mode to support Vue's TS language service, search for @builtin typescript in "plugins", click the gear button, and then click Disable.

For specific operations, refer to https://cn.vuejs.org/guide/typescript/overview.html#volar-takeover-mode.

### 4. Development Process

Clone the repository on your local machine:

```shell
git clone git@github.com:chenxiaosen/pnpm-turbo-template.git
```

Switch to the project directory:

```shell
cd turbo-pnpm
```

Install project dependencies:

```shell
pnpm install
```

Start the development server:

```shell
pnpm run dev --filter=playground
```

Now, you should be able to open `http://localhost:3000` in your browser to view the project.

### 5. Building the Project

When your code is ready for deployment, you can run the following command to build the production version:

```shell
pnpm run build --filter=playground
```

This will create a `dist` directory, which contains the optimized files for production.

## Contribution

If you have any questions or suggestions, feel free to submit an issue or pull request.

## License

The project is released under the MIT license. For more details, please see the [`LICENSE`](./LICENSE) file.

## Contact

If you have any questions or suggestions, feel free to contact me at chenxiaosencn@gmail.com or submit an issue.

Hope you enjoy this project! If you find it helpful, don't forget to give us a star ⭐️, thank you very much!
