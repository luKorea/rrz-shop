<template>
  <transition name="purse">
    <div class="purse-info-wrap" v-show="showGetPurse">
      <div class="get-info">
        <div class="left">
          <img src="@/assets/image/notice/get-price.png" alt="" />
        </div>
        <div class="center">
          <div class="title">
            恭喜获得
            {{ totalPurse }} 个租币！
          </div>
          <div class="source">{{ getType }}</div>
        </div>
        <div class="right">+{{ totalPurse }}</div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'

enum IType {
  notice = '阅读消息',
  task = '任务完成'
}

type ITypeList = 'notice' | 'task'

interface IProps {
  type: ITypeList
  totalPurse: number | undefined
  showGetPurse: boolean
}

const props = defineProps<IProps>()

const getType = computed(() => IType[props.type])
</script>

<style scoped lang="less">
@import url(@/assets/css/mixins.less);
.purse-info-wrap {
  .flex-layout();
  margin: 0 auto;
  width: 330px;
  background: rgba(0, 0, 0, 0.72);
  border-radius: 6px;
  box-sizing: border-box;
  position: fixed;
  bottom: 20px;
  right: 23px;
  z-index: 9999;
  .get-info {
    .flex-layout(space-between);
    padding: 10px 16px 9px 13px;
    width: 100%;

    .left {
      width: 41px;
      height: 41px;
      margin-right: 4px;
    }
    .center {
      display: flex;
      flex-direction: column;
      flex: 1;
      .title {
        height: 21px;
        font-size: 15px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
      }
      .source {
        height: 17px;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
      }
    }
    .right {
      font-size: 19px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #ffffff;
    }
  }
}

.purse-enter,
.purse-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
.purse-enter-to,
.purse-leave {
  opacity: 1;
}
.purse-enter-active,
.purse-leave-active {
  transition: all 0.5s;
}
</style>
