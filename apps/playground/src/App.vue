<template>
  <div class="bg-gray-400">
    <h1>Playground</h1>
    <MyButton text="My Button" />
  </div>
</template>
<script lang="ts" setup>
  //直接引用packages组件
  // import { MyButton } from '@my-lib/components'
  //引用打包后的lib组件
  import { MyButton } from 'my-lib'
  import { useDarkMode } from './hooks/ToggleDarkMode'
  const mode = useDarkMode()
  console.log(mode)
</script>
<style scoped></style>
