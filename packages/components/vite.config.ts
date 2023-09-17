/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'url'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import vueJsx from '@vitejs/plugin-vue-jsx'
export default defineConfig({
  build: {
    //打包文件目录
    outDir: 'es',
    //压缩
    //minify: false,
    rollupOptions: {
      //忽略打包vue文件, 自行补充组件库等
      external: ['vue'],
      input: ['index.ts'],
      output: [
        {
          //打包格式
          format: 'es',
          //打包后文件名
          entryFileNames: '[name].mjs',
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          //配置打包根目录
          dir: '../my-lib/es',
        },
        {
          //打包格式
          format: 'cjs',
          //打包后文件名
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          //配置打包根目录
          dir: '../my-lib/lib',
        },
      ],
    },
    lib: {
      entry: './index.ts',
    },
  },
  plugins: [
    vue(),
    dts({
      entryRoot: './src',
      outputDir: ['../my-lib/es/src', '../my-lib/lib/src'],
      //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
      tsConfigFilePath: './tsconfig.json',
    }),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
  //@ts-ignore
  test: {},
})
