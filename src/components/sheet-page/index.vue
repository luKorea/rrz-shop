<template>
  <van-action-sheet v-model:show="showSheetModal">
    <slot></slot>
  </van-action-sheet>
</template>

<script setup lang="ts">
import { ref, defineExpose } from 'vue'

const showSheetModal = ref(false)

const changeSheetModal = () => {
  showSheetModal.value = !showSheetModal.value
}

defineExpose({
  changeSheetModal,
  showSheetModal
})
</script>

<style scoped></style>
