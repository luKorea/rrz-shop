<template>
  <div class="home-item-wrap">
    <!-- tip -->
    <div class="nav-wrap">
      <div class="tip">
        <div class="item-tip"></div>
      </div>
      <div class="title-wrap">
        <div class="left">租币当钱花</div>
      </div>
      <div class="scroll-wrap">
        <template v-for="item of itemList" :key="item.id">
          <div class="scroll-item" @click="goPage(item)">
            <img :src="item.img" alt="" />
          </div>
        </template>
      </div>
    </div>
    <div class="title-wrap">
      <div class="left">租物推荐</div>
    </div>
    <!-- 商品区域 -->
    <template v-if="goodsList.length">
      <div class="goods-item-wrap">
        <template v-for="item of goodsList" :key="item.id">
          <div class="item">
            <div class="img"><img :src="item.img" alt="" /></div>
            <div class="info">
              <div class="title text-ellipsis">
                {{ item.title }}
              </div>
              <div class="current-type">免押金</div>
              <div class="item-count">
                <div class="original-price">¥{{ item.originalPrice }}/天</div>
                <div class="count">{{ item.day }}天起租</div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </template>

    <!-- 任务区域 -->
    <home-task ref="homeTaskRef"></home-task>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { IGoodsListProps, IItemProps } from '../resource/types'

import homeTask from './home-task.vue'

interface IProps {
  itemList: IItemProps[]
  goodsList: IGoodsListProps[]
}

defineProps<IProps>()

const router = useRouter()
const homeTaskRef = ref<InstanceType<typeof homeTask> | null>(null)

function goPage(item: IItemProps) {
  if (item.type === 'url') {
    router.push(item.url)
  } else {
    homeTaskRef.value && homeTaskRef.value.changeModal()
  }
}
</script>

<style scoped lang="less">
@import '@/assets/css/mixins.less';
.home-item-wrap {
  .nav-wrap {
    width: 100%;
    // padding: 0 15px;
    box-sizing: border-box;
    background: #fff;
    border-radius: 24px 24px 0px 0px;
    position: relative;
    top: -34px;
    .tip {
      .flex-layout();
      width: 100%;
      padding: 10px 0;
      box-sizing: border-box;
      .item-tip {
        width: 30px;
        height: 5px;
        border-radius: 3px;
        background: #e2e2e2;
      }
    }
    .scroll-wrap {
      box-sizing: border-box;
      white-space: nowrap;
      overflow: hidden;
      overflow-x: auto;
      margin-left: 15px;
      .scroll-item {
        width: 100px;
        height: 120px;
        margin-right: 5px;
        display: inline-block;
        border-radius: 10px;
        margin-bottom: 10px;
      }
    }
  }

  .title-wrap {
    height: 36px;
    .flex-layout(space-between);
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    line-height: 16px;
    padding-left: 15px;

    .left {
      .flex-layout();
      color: #222222;
    }
    .right {
      .flex-layout();
      color: #999999;
    }
  }
  .goods-item-wrap {
    flex-wrap: wrap;
    background-color: #f7f8f9;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    padding: 0 12px;
    .item {
      display: flex;
      flex-direction: column;
      position: relative;
      width: 170px;
      background: #ffffff;
      border-radius: 5px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      margin-bottom: 6px;
      box-sizing: border-box;

      .img {
        width: 100%;
        // border: 1px solid;
        height: 136px;
        margin-bottom: 5px;
      }
      .info {
        padding: 0 6px;
        .title {
          font-size: 14px;
          line-height: 14px;
          font-weight: 500;
          color: #333333;
          margin-bottom: 8px;
        }
        .current-type {
          .flex-layout();
          width: 42px;
          padding: 2px;
          box-sizing: border-box;
          border-radius: 2px;
          border: 1px solid #00c8be;
          margin-bottom: 8px;
          font-size: 11px;
          font-weight: 400;
          color: #00c8be;
        }
        .item-count {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: #999999;
          margin-bottom: 8px;
          .original-price {
            color: #f04f4f;
          }
        }
      }
    }
  }
}
</style>
