<template>
  <template v-if="list.length">
    <template v-for="item of list" :key="item.id">
      <notice-item
        :item-info="item"
        @show-details="showDetails"
        type="notice"
      ></notice-item>
    </template>
    <div class="nothing-more">没有更多了</div>
  </template>
  <nothing-page v-else></nothing-page>

  <!-- 这里展示详情内容 -->
  <van-action-sheet v-model:show="showDetail">
    <div class="action-content">
      <div class="title">{{ showDetailInfo?.title }}</div>
      <div class="desc">{{ showDetailInfo?.desc }}</div>
      <div class="img">
        <img :src="showDetailInfo?.img" alt="" />
      </div>
      <div class="sub-title">{{ showDetailInfo?.subTitle }}</div>
      <div class="sub-desc">{{ showDetailInfo?.subDesc }}</div>
      <div class="btn-wrap">
        <div class="delete" @click="deleteItem">删除</div>
        <div class="confirm" @click="confirmItem">确定</div>
      </div>
    </div>
  </van-action-sheet>
</template>

<script setup lang="ts">
import { defineProps, ref, defineEmits, defineExpose } from 'vue'
import nothingPage from '@/components/nothing-page/index.vue'
import noticeItem from '@/components/notice-item/index.vue'
import type { IDataListProps } from '../resource/types'

interface IProps {
  list: IDataListProps[]
}

defineProps<IProps>()
const emits = defineEmits(['delete', 'confirm'])

const showDetail = ref(false)
const showDetailInfo = ref<IDataListProps>()

function showDetails(item: IDataListProps) {
  showDetail.value = true
  showDetailInfo.value = item
}

function deleteItem() {
  emits('delete', showDetailInfo.value?.id)
}

function confirmItem() {
  emits('confirm', showDetailInfo.value?.id, showDetailInfo.value?.isWatch)
}

defineExpose({
  showDetail
})
</script>

<style scoped lang="less">
.action-content {
  padding: 35px 16px 0 16px;
  font-family: PingFangSC-Regular, PingFang SC;

  .title {
    height: 18px;
    font-size: 18px;
    font-weight: 400;
    color: #333333;
    line-height: 18px;
    margin-bottom: 10px;
  }
  .desc {
    font-size: 14px;
    font-weight: 400;
    color: #999999;
    line-height: 19px;
  }
  .img {
    width: 345px;
    height: 160px;
    margin: 10px 0;
  }
  .sub-title {
    height: 23px;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #222222;
    line-height: 23px;
  }
  .sub-desc {
    height: 19px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #999999;
    line-height: 19px;
    margin: 5px 0 22px 0;
  }
  .btn-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    margin: 0 -15px;
    .delete {
      width: 115px;
      background: #f2f2f2;
      height: 50px;
      color: #bfbfbf;
    }
    .confirm {
      flex: 1;
      background: #00c8be;
      height: 50px;
      text-align: center;
      color: #ffffff;
    }
  }
}
</style>
