<template>
  <div class="home-wrapper">
    <home-banner :icon-list="iconList"></home-banner>
    <home-item
      :goods-list="goodsList"
      :item-list="itemList"
      ref="shoppingRef"
    ></home-item>
    <load-more-btn
      type="gray"
      title="查看更多"
      @handle-go-page="goPage"
    ></load-more-btn>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import homeBanner from './components/home-banner.vue'
import homeItem from './components/home-item.vue'
import loadMoreBtn from '@/components/load-more-btn/index.vue'

import useTitle from '@/hooks/use-title'
import type { IItemProps, IIconProps } from './resource/types'
import { getGoodsData } from './resource/data'
import uuid from '@/utils/uuid'

// 图标
const iconList = ref<IIconProps[]>([
  {
    id: uuid(),
    title: '支付成功',
    type: 'pay',
    icon: require('@/assets/image/home/pay-two.png')
  },
  {
    id: uuid(),
    title: '支付成功',
    type: 'pay',
    icon: require('@/assets/image/home/pay-two.png')
  },
  {
    id: uuid(),
    title: '运动步数',
    type: 'sport',
    icon: require('@/assets/image/home/pay-two.png')
  },
  {
    id: uuid(),
    title: '运动步数',
    type: 'sport',
    icon: require('@/assets/image/home/pay-two.png')
  },
  {
    id: uuid(),
    title: '新人专享',
    type: 'new',
    icon: require('@/assets/image/home/new-two.png')
  }
])

const itemList = ref<IItemProps[]>([
  {
    img: require('@/assets/image/home/pic1.png'),
    url: '/details',
    type: 'url',
    id: 1
  },
  {
    img: require('@/assets/image/home/pic2.png'),
    url: '/details',
    type: 'modal',
    id: 2
  },
  {
    img: require('@/assets/image/home/pic3.png'),
    url: '/shopping',
    type: 'url',
    id: 3
  },
  {
    img: require('@/assets/image/home/pic1.png'),
    url: '/details',
    type: 'url',
    id: 4
  },
  {
    img: require('@/assets/image/home/pic2.png'),
    url: '/details',
    type: 'url',
    id: 5
  }
])

const goodsList = computed(() => getGoodsData())
function goPage() {
  console.log('去页面')
}

useTitle('租币商城')
</script>

<style scoped lang="less">
.home-wrapper {
  width: 100%;
  height: 100vh;
  background: #f7f8f9;
}
</style>
