<template>
  <router-view />
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
watch(
  () => route.path,
  () => {
    window.scrollTo(0, 0)
  }
)
</script>

<style lang="less">
@import url('@/assets/css/common.less');
</style>
