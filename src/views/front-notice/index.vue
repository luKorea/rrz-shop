<template>
  <div class="notice-wrapper">
    <van-tabs
      v-model:active="selectItem"
      color="#00c8be"
      line-width="21px"
      @click-tab="changeItem"
    >
      <template v-for="(item, index) of tabList" :key="index">
        <van-tab :title="item.title" :dot="item.showDot" :name="item.name" />
      </template>
    </van-tabs>
    <div>公共区域</div>
    <div v-if="selectItem === 'notice'">测试</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface ITabProps {
  title: string
  name: string
  showDot?: boolean
}

const selectItem = ref('notice')
const tabList = ref<ITabProps[]>([
  {
    title: '活动公告',
    name: 'notice'
  },
  {
    title: '订单消息',
    name: 'order',
    showDot: true
  }
])

function changeItem(item: ITabProps) {
  const checked = tabList.value.find((i) => i.title === item.title)
  checked && (selectItem.value = checked.name)
}
</script>

<style scoped lang="less">
.notice-wrapper {
  background-color: #f7f8f9;
  width: 100%;
  height: 100%;
}
</style>
