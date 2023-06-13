<template>
  <div class="active-wrap">
    <template v-if="list.length">
      <template v-for="item of list" :key="item.id">
        <div class="active-item" @click="showDetails(item)">
          <div class="left">
            <img src="@/assets/image/notice/notice.png" alt="" />
            <div v-if="!item.isWatch" class="item-point">
              <img src="@/assets/image/notice/point.png" alt="" />
            </div>
          </div>
          <div class="right">
            <div class="top">
              <div class="title">{{ item.title }}</div>
              <div class="time">{{ item.time }}</div>
            </div>
            <div class="bottom text-ellipsis">{{ item.desc }}</div>
          </div>
        </div>
        <div class="line"></div>
      </template>
      <div class="nothing-more">没有更多了</div>
    </template>
    <nothing-page v-else></nothing-page>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import nothingPage from '@/components/nothing-page/index.vue'
import type { IDataListProps } from '../types'

interface IProps {
  list: IDataListProps[]
}

defineProps<IProps>()

function showDetails(item: IDataListProps) {
  console.log(item)
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
    margin-top: 15px;
  }
}
</style>
