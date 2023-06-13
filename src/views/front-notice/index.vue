<template>
  <div class="notice-wrapper">
    <van-tabs
      v-model:active="selectItem"
      color="#00c8be"
      line-width="21px"
      @click-tab="changeItem"
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
      <div class="item">
        <div class="icon">
          <img src="@/assets/image/notice/delete.png" alt="" />
        </div>
        <div class="title">删除已读</div>
      </div>
      <van-divider vertical />
      <div class="item">
        <div class="icon">
          <img src="@/assets/image/notice/remove.png" alt="" />
        </div>
        <div class="title">一键已读</div>
      </div>
    </div>

    <notice-active
      v-if="selectItem === 'notice'"
      :list="activeList"
    ></notice-active>
    <notice-order
      v-if="selectItem === 'order'"
      :list="orderList"
    ></notice-order>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { IDataListProps, ITabProps } from './types'

import noticeActive from './components/notice-active.vue'
import noticeOrder from './components/notice-order.vue'
import uuid from '@/utils/uuid'

const activeList = ref<IDataListProps[]>([
  {
    title: '活动通知',
    id: uuid(),
    time: '2020-03-23 14:30',
    desc: '人人租机祝你节日快乐',
    isWatch: false
  },
  {
    title: '免费得iPhone11',
    id: uuid(),
    time: '2020-03-23 14:30',
    desc: '人人租机祝你节日快乐',
    isWatch: false
  },
  {
    title: '这里的字符限制是十二个字',
    id: uuid(),
    time: '2020-03-23 14:30',
    desc: '恭喜获得20个租币，请查收。为了感谢其长久以来的陪伴，这里的文字请忽略。活动期间每天 11 点还会上线限量礼包，数量有限先到先得，用户们千万不要错过！ ',
    isWatch: true
  },
  {
    title: '节日赠租币',
    id: uuid(),
    time: '2020-03-23 14:30',
    desc: '恭喜获得20个租币，请查收。为了感谢其长久以来的陪伴，这里的文字请忽略。活动期间每天 11 点还会上线限量礼包，数量有限先到先得，用户们千万不要错过！ ',
    isWatch: true
  }
])
const orderList = ref<IDataListProps[]>([
  {
    title: '订单已取消',
    id: uuid(),
    time: '2020-03-23 14:30',
    desc: '订单已成功取消，感谢您的关注',
    isWatch: false
  },
  {
    title: '节日赠租币',
    id: uuid(),
    time: '2020-03-23 14:30',
    desc: '订单已成功取消，感谢您的关注',
    isWatch: true
  }
])

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
@import url('@/assets/css/mixins.less');
.notice-wrapper {
  width: 100%;
  height: 100%;
  background-color: #fff;
  // padding: 0 15px;
  // box-sizing: border-box;
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
