<template>
  <button class="rounded-md bg-green-400">
    <span class="p-5 text-red-400">{{ props.text }}</span>
  </button>
</template>
<script lang="ts" setup>
  export interface Props {
    text?: string
  }
  const props = withDefaults(defineProps<Props>(), {
    text: '按钮',
  })
</script>
<style scoped></style>
