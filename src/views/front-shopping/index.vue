<template>
  <div class="shopping-wrapper" ref="shoppingWrapRef">
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
import { ref, watch, computed, nextTick } from 'vue'
import shoppingBanner from './components/shopping-banner.vue'
import shoppingItem from './components/shopping-item.vue'
import loadMoreBtn from '@/components/load-more-btn/index.vue'

import { showLoading, closeLoading } from '@/hooks/use-vant'
import useTitle from '@/hooks/use-title'
import { getGoodsData } from './resource/data'
import { IGoodsListProps } from './resource/types'
import { useScroll } from '@vueuse/core'

const shoppingRef = ref<InstanceType<typeof shoppingItem> | null>(null)
const shoppingWrapRef = ref<HTMLElement | null>(null)
// 上拉加载数据
const { arrivedState } = useScroll(shoppingWrapRef, {
  throttle: 200
})
watch(
  () => arrivedState.bottom,
  (newValue) => {
    if (newValue) {
      if (goodsList.value.length <= 50) {
        showLoading()
        goodsList.value = [...goodsList.value, ...getGoodsData()]
      }
      nextTick(() => {
        closeLoading()
      })
    }
  }
)

const priceList = ref<string[]>([
  '全部',
  '1-100',
  '100-500',
  '500-5000',
  '5000以上'
])

const goodsList = ref<IGoodsListProps[]>(getGoodsData())

function goPage() {
  console.log('去页面')
}

useTitle('租币商城')
</script>

<style scoped lang="less">
.shopping-wrapper {
  width: 100%;
  height: 100vh;
  overflow: auto;
  background: #f7f8f9;
}
</style>
