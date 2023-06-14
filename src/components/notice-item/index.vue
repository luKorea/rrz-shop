<template>
  <div class="active-wrap">
    <div class="active-item" @click="showDetails">
      <div class="left">
        <img :src="iconType" alt="" />
        <div v-if="!itemInfo.isWatch" class="item-point">
          <img src="@/assets/image/notice/point.png" alt="" />
        </div>
      </div>
      <div class="right">
        <div class="top">
          <div class="title">{{ itemInfo.title }}</div>
          <div class="time">{{ itemInfo.time }}</div>
        </div>
        <div class="bottom text-ellipsis">{{ itemInfo.desc }}</div>
      </div>
    </div>
    <div class="line"></div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from 'vue'
import { IDataListProps } from '@/views/front-notice/resource/types'

type TIconType = 'notice' | 'order'

interface IProps {
  itemInfo: IDataListProps
  type: TIconType
}

const props = defineProps<IProps>()

const emits = defineEmits(['showDetails'])

const iconType = computed(() =>
  props.type === 'notice'
    ? require('@/assets/image/notice/notice.png')
    : require('@/assets/image/notice/order.png')
)
function showDetails() {
  emits('showDetails', props.itemInfo)
}
</script>

<style scoped lang="less">
@import url('@/assets/css/mixins.less');
.active-wrap {
  width: 100%;
  .active-item {
    display: flex;
    padding: 15px;
    width: 100%;
    box-sizing: border-box;
    .left {
      width: 24px;
      height: 24px;
      margin-right: 10px;
      position: relative;
      .item-point {
        position: absolute;
        right: -6px;
        top: -8px;
        width: 8px;
        height: 8px;
      }
    }
    .right {
      display: flex;
      flex-direction: column;
      width: 100%;
      .top {
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        .title {
          height: 16px;
          font-size: 16px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #333333;
          line-height: 16px;
        }
        .time {
          height: 12px;
          font-size: 12px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #999999;
          line-height: 12px;
        }
      }
      .bottom {
        width: 311px;
        height: 12px;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
        line-height: 12px;
      }
    }
  }
  .line {
    margin-left: 15px;
    height: 1px;
    background-color: #f2f2f2;
  }
  .nothing-more {
    .flex-layout();
    height: 12px;
    font-size: 12px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #999999;
    line-height: 12px;
    padding: 15px 0;
  }
}
</style>
