<template>
  <div class="home-wrapper">
    <home-banner></home-banner>
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
import { ref } from 'vue'
import homeBanner from './components/home-banner.vue'
import homeItem from './components/home-item.vue'
import loadMoreBtn from '@/components/load-more-btn/index.vue'

import useTitle from '@/hooks/use-title'
import uuid from '@/utils/uuid'
import type { IGoodsListProps, IItemProps } from './types'

const itemList = ref<IItemProps[]>([
  {
    img: require('@/assets/image/home/pic1.png'),
    url: '/details',
    id: 1
  },
  {
    img: require('@/assets/image/home/pic2.png'),
    url: '/details',
    id: 2
  },
  {
    img: require('@/assets/image/home/pic3.png'),
    url: '/shopping',
    id: 3
  },
  {
    img: require('@/assets/image/home/pic1.png'),
    url: '/details',
    id: 4
  },
  {
    img: require('@/assets/image/home/pic2.png'),
    url: '/details',
    id: 5
  }
])

const goodsList = ref<IGoodsListProps[]>([
  {
    id: uuid(),
    title: '顶配 iPhone Xs 256 Pro Max',
    purse: 2048,
    currentPrice: 9.9,
    originalPrice: 12.8,
    count: 2434,
    isFree: true,
    img: require('@/assets/image/shopping/goods-item1.png')
  },
  {
    id: uuid(),
    title: '顶配 iPhone Xs 256 Pro Max',
    purse: 2048,
    currentPrice: 9.9,
    originalPrice: 12.8,
    count: 2434,
    isFree: false,
    img: require('@/assets/image/shopping/goods-item2.png')
  },
  {
    id: uuid(),
    title: '顶配 iPhone Xs 256 Pro Max',
    purse: 2048,
    currentPrice: 9.9,
    originalPrice: 12.8,
    count: 2434,
    isFree: true,
    img: require('@/assets/image/shopping/goods-item3.png')
  },
  {
    id: uuid(),
    title: '顶配 iPhone Xs 256 Pro Max',
    purse: 2048,
    currentPrice: 9.9,
    originalPrice: 12.8,
    count: 2434,
    isFree: false,
    img: require('@/assets/image/shopping/goods-item4.png')
  }
])

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
