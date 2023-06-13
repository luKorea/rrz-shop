<template>
  <div class="scroll-item" style="height: height">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

interface IProps {
  height: string
}

defineProps<IProps>()
</script>

<style scope lang="less">
.scroll-item {
  white-space: nowrap; /*文本不会换行，文本会在在同一行上继续*/
  overflow: hidden;
  overflow-x: auto; /*可滑动*/
}
</style>
