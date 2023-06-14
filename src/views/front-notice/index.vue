<template>
  <div class="notice-wrapper" ref="noticeRef">
    <van-tabs
      v-model:active="selectItem"
      color="#00C8BE"
      line-width="20px"
      @click-tab="changeItem"
      title-active-color="#333"
      title-inactive-color="#666"
      sticky
    >
      <template v-for="(item, index) of tabList" :key="index">
        <van-tab
          :title-style="{ textAlign: 'left' }"
          :title="item.title"
          :dot="item.showDot"
          :name="item.name"
        />
      </template>
    </van-tabs>
    <div class="remove-wrap">
      <div class="item" @click="deleteIsWatchItem">
        <div class="icon">
          <img src="@/assets/image/notice/delete.png" alt="" />
        </div>
        <div class="title">删除已读</div>
      </div>
      <van-divider vertical />
      <div class="item" @click="oneClickRead">
        <div class="icon">
          <img src="@/assets/image/notice/remove.png" alt="" />
        </div>
        <div class="title">一键已读</div>
      </div>
    </div>

    <notice-active
      v-if="selectItem === 'notice'"
      :list="activeList"
      @delete="deleteItem"
      @confirm="confirmItem"
      ref="itemRef"
    ></notice-active>
    <notice-order
      v-if="selectItem === 'order'"
      :list="orderList"
    ></notice-order>
  </div>

  <!-- 这里处理通知获取金币 -->
  <get-purse
    :show-get-purse="showGetPurse"
    type="notice"
    :total-purse="!isOneClick ? saveClickItemInfo?.purse : totalPurse"
  ></get-purse>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import type { IDataListProps, ITabProps } from './resource/types'

import noticeActive from './components/notice-active.vue'
import noticeOrder from './components/notice-order.vue'
import getPurse from '@/components/get-purse/index.vue'

import {
  showFrontDialog,
  showSuccessToast,
  closeLoading,
  showLoading
} from '@/hooks/use-vant'
import { nextTick } from 'vue'
import { getOrderData, getActiveData } from './resource/data'
import { useScroll } from '@vueuse/core'

// 活动通知
const activeList = ref<IDataListProps[]>(getActiveData())
// 订单消息
const orderList = ref<IDataListProps[]>(getOrderData())
const selectItem = ref('notice')
const tabList = computed<ITabProps[]>(() => {
  return [
    {
      title: '活动公告',
      name: 'notice'
    },
    {
      title: '订单消息',
      name: 'order',
      showDot: isShowDot.value
    }
  ]
})

const itemRef = ref<InstanceType<typeof noticeActive> | null>(null)
const showGetPurse = ref(false)
const saveClickItemInfo = ref<IDataListProps>()

const isNotice = computed(() => selectItem.value === 'notice')
const isShowDot = computed(() => !!orderList.value.find((i) => !i.isWatch))
const isOneClick = ref(false)
const totalPurse = ref(0)

// 上拉加载数据
const noticeRef = ref<HTMLElement | null>(null)
const { arrivedState } = useScroll(noticeRef)
watch(
  () => arrivedState.bottom,
  (newValue) => {
    if (newValue) {
      if (isNotice.value && activeList.value.length <= 50) {
        showLoading()
        activeList.value = [...activeList.value, ...getActiveData()]
      } else if (!isNotice.value && orderList.value.length <= 50) {
        showLoading()
        orderList.value = [...orderList.value, ...getOrderData()]
      }
      nextTick(() => {
        closeLoading()
      })
    }
  }
)

function confirmItem(id: string, isWatch: boolean) {
  let item = null
  if (isNotice.value) {
    item = activeList.value.find((i) => i.id === id)
    item && (item.isWatch = true)
  } else {
    item = orderList.value.find((i) => i.id === id)
    item && (item.isWatch = true)
  }
  saveClickItemInfo.value = item
  itemRef.value && (itemRef.value.showDetail = false)
  // 这里展示中奖信息
  !isWatch && changGetPurseState()
}
function deleteItem(id: string) {
  showFrontDialog({
    message: `是否确认要删除${isNotice.value ? '该通知' : '该订单'}`
  })
    .then(() => {
      console.log('这里不做操作')
    })
    .catch(() => {
      let index = null
      if (isNotice.value) {
        index = activeList.value.findIndex((i) => i.id === id)
        activeList.value.splice(index, 1)
      } else {
        index = orderList.value.findIndex((i) => i.id === id)
        orderList.value.splice(index, 1)
      }
      showSuccessToast(`删除${isNotice.value ? '通知' : '订单'}成功`)
      itemRef.value && (itemRef.value.showDetail = false)
    })
}

// 删除已读
function deleteIsWatchItem() {
  showFrontDialog({
    message: `是否确认要删除${isNotice.value ? '已读通知' : '已读订单'}`
  })
    .then(() => {
      console.log('这里不做操作')
    })
    .catch(() => {
      if (isNotice.value) {
        activeList.value = activeList.value.filter((i) => !i.isWatch)
      } else {
        orderList.value = orderList.value.filter((i) => !i.isWatch)
      }
    })
}
// 一键已读
function oneClickRead() {
  if (isNotice.value) {
    const item = activeList.value.filter((i) => !i.isWatch)
    // 已经点击过就不再处理
    if (!item.length) return
    // 拿到未读信息的金币, 累加
    const purseTotal = item.reduce((pre, next) => pre + next.purse, 0)
    isOneClick.value = true
    totalPurse.value = purseTotal
    activeList.value = activeList.value.map((i) => {
      if (!i.isWatch) {
        i.isWatch = true
      }
      return {
        ...i
      }
    })
    changGetPurseState()
  } else {
    orderList.value = orderList.value.map((i) => {
      if (!i.isWatch) {
        i.isWatch = true
      }
      return {
        ...i
      }
    })
  }
}

async function changGetPurseState() {
  showGetPurse.value = true
  await nextTick()
  setTimeout(() => {
    showGetPurse.value = false
  }, 2000)
}

// tab

function changeItem(item: ITabProps) {
  const checked = tabList.value.find((i) => i.title === item.title)
  checked && (selectItem.value = checked.name)
}
</script>

<style scoped lang="less">
@import url('@/assets/css/mixins.less');
.notice-wrapper {
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: #fff;
  // padding: 0 15px;
  // box-sizing: border-box;
  :deep(.van-tab) {
    flex: none;
    padding: 0 15px;
    font-size: 16px;
  }
  :deep(.van-tabs__line) {
    bottom: 20px;
  }
  :deep(.van-tab--active) {
    font-size: 20px;
  }

  .remove-wrap {
    display: flex;
    align-items: center;
    padding: 0 15px;
    height: 42px;
    background: #f7f8f9;
    .item {
      display: flex;
      align-items: center;
      .icon {
        width: 12px;
        height: 12px;
        margin-right: 2px;
        img {
          vertical-align: text-top;
        }
      }
      .title {
        height: 12px;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
        line-height: 12px;
      }
    }
  }
}
</style>
