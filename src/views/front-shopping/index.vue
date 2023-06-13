<template>
  <div class="shopping-wrapper">
    <shopping-banner></shopping-banner>
    <shopping-item
      :price-list="priceList"
      :goods-list="goodsList"
      ref="shoppingRef"
    ></shopping-item>
    <load-more-btn
      type="orange"
      title="赚取更多租币"
      @handle-go-page="goPage"
    ></load-more-btn>
  </div>
</template>

<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import shoppingBanner from './components/shopping-banner.vue'
import shoppingItem from './components/shopping-item.vue'
import loadMoreBtn from '@/components/load-more-btn/index.vue'

import useTitle from '@/hooks/use-title'
import uuid from '@/utils/uuid'
import type { IGoodsListProps } from './types'
import useScroll from '@/hooks/use-scroll'

const shoppingRef = ref<InstanceType<typeof shoppingItem> | null>(null)
const { isReachBottom } = useScroll(shoppingRef.value)

// TODO 缺少上滑加载更多，触底加载更多
watchEffect(() => {
  console.log(isReachBottom.value, 'isReachBottom.value')
})

const priceList = ref<string[]>([
  '全部',
  '1-100',
  '100-500',
  '500-5000',
  '5000以上'
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
.shopping-wrapper {
  width: 100%;
  height: 100vh;
  background: #f7f8f9;
}
</style>
