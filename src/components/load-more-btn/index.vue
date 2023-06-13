<template>
  <div class="load-wrapper">
    <div :class="load[type]" class="load-more-btn" @click="handleGoPage">
      {{ title }}
      <slot><van-icon name="arrow" /></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, withDefaults, defineEmits } from 'vue'

type TType = 'gray' | 'orange'

interface IProps {
  title: string
  type: TType
}

withDefaults(defineProps<IProps>(), {
  title: '查看更多'
})

const emits = defineEmits(['handleGoPage'])

function handleGoPage() {
  emits('handleGoPage')
}
</script>

<style scope lang="less">
.load-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 25px 0;
  background: #f7f8f9;
  .load-more-btn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 134px;
    height: 31px;
    line-height: 31px;
    border-radius: 15px;
    font-size: 15px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
  }
}
</style>

<style module="load">
.gray {
  border: 1px solid #999999;
  color: #999999;
}
.orange {
  border: 1px solid #ff6737;
  color: #ff6737;
}
</style>
