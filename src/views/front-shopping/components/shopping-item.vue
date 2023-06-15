<template>
  <div class="shopping-item-wrap">
    <!-- 标题区域 -->
    <div class="title-wrap">
      <div class="left">
        兑换商城
        <van-icon color="#999" name="question-o" class="f-14" />
      </div>
      <div class="right">
        兑换记录
        <van-icon name="arrow" />
      </div>
    </div>
    <!-- 筛选区域 -->
    <template v-if="priceList.length">
      <div class="search-wrap">
        <template v-for="(item, index) of priceList" :key="index">
          <div
            class="search-item"
            :class="selectIndex === index && 'checked'"
            @click="searchItem(index)"
          >
            {{ item }}
          </div>
        </template>
      </div>
    </template>
    <!-- 商品区域 -->
    <template v-if="goodsList.length">
      <div class="goods-item-wrap">
        <template v-for="item of goodsList" :key="item.id">
          <div class="item">
            <div class="img"><img lazy :src="item.img" alt="" /></div>
            <div class="is-free orange-tip" v-if="item.isFree">包邮</div>
            <div class="info">
              <div class="title text-ellipsis">
                {{ item.title }}
              </div>
              <div class="current-price">
                {{ item.purse }} 租币 + {{ item.currentPrice }}元
              </div>
              <div class="item-count">
                <div class="original-price">{{ item.originalPrice }}元</div>
                <div class="count">已兑{{ item.count }}件</div>
              </div>
            </div>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'
import type { IGoodsListProps } from '../resource/types'

interface IProps {
  priceList: string[]
  goodsList: IGoodsListProps[]
}

defineProps<IProps>()
const selectIndex = ref(0)

function searchItem(index: number) {
  selectIndex.value = index
}
</script>

<style scoped lang="less">
@import '@/assets/css/mixins.less';
.shopping-item-wrap {
  width: 100%;
  padding: 0 15px 15px 15px;
  width: 100%;
  box-sizing: border-box;

  background: #f7f8f9;
  .title-wrap {
    height: 36px;
    .flex-layout(space-between);
    font-size: 16px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    line-height: 16px;

    .left {
      .flex-layout();
      color: #222222;
    }
    .right {
      .flex-layout();
      color: #999999;
    }
  }
  .search-wrap {
    .flex-layout(space-between);
    margin: 12px 0 16px 0;
    .search-item {
      .flex-layout();
      border-radius: 11px;
      border: 1px solid #e6e6e6;
      padding: 5px 10px;
      font-weight: 500;
      font-size: 12px;
      color: #999999;
    }
    .checked {
      background: rgba(255, 103, 55, 0.1);
      color: #ff6737;
      border: none;
    }
  }

  .goods-item-wrap {
    .flex-layout(space-between);
    flex-wrap: wrap;
    .item {
      display: flex;
      flex-direction: column;
      position: relative;
      width: 168px;
      background: #ffffff;
      border-radius: 5px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      box-sizing: border-box;
      margin-bottom: 8px;
      .is-free {
        position: absolute;
        right: 8px;
        top: 8px;
      }
      .img {
        width: 168px;
        // border: 1px solid;
        height: 136px;
        margin-bottom: 5px;
      }
      .info {
        padding: 0 10px;
        .title {
          font-size: 14px;
          line-height: 14px;
          font-weight: 500;
          color: #333333;
          margin-bottom: 8px;
        }
        .current-price {
          height: 14px;
          font-size: 14px;
          color: #ff6737;
          line-height: 14px;
          margin-bottom: 8px;
        }
        .item-count {
          display: flex;
          align-items: center;
          font-size: 12px;
          color: #999999;
          margin-bottom: 8px;
          .original-price {
            color: #999999;
            margin-right: 4px;
            text-decoration: line-through;
          }
        }
      }
    }
  }
}
</style>
