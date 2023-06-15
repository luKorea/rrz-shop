<template>
  <sheet-page ref="sheetRef">
    <div class="task-wrap">
      <div class="title-wrap">
        <div class="title">天天做任务赚翻租币</div>
        <div class="desc">
          已获得
          <span class="number">{{ getTotalPurse }}</span> 个租币，租币可兑换商品
        </div>
        <van-icon @click="changeModal(false)" class="close-btn" name="close" />
      </div>
      <div class="content">
        <div class="content-title">新人专享</div>
        <!-- 新人专享 -->
        <template v-if="newPeopleList.length">
          <template v-for="item of newPeopleList" :key="item.id">
            <div class="item" @click="handlePurse(item, 'new')">
              <div class="icon">
                <van-icon :name="item.icon"></van-icon>
              </div>
              <div class="title">{{ item.title }}</div>
              <div :class="item.isSend ? 'gray-btn' : 'orange-btn'">
                {{ item.isSend ? '已领取' : `+${item.purse}租币` }}
              </div>
            </div>
          </template>
        </template>
      </div>
      <div class="content">
        <div class="content-title">每天逛逛</div>
        <template v-if="dayList.length">
          <template v-for="item of dayList" :key="item.id">
            <div class="item" @click="handlePurse(item, 'day')">
              <div class="icon">
                <van-icon :name="item.icon"></van-icon>
              </div>
              <div class="title">{{ item.title }}</div>
              <div :class="item.isSend ? 'gray-btn' : 'orange-btn'">
                {{ item.isSend ? '已领取' : `+${item.purse}租币` }}
              </div>
            </div>
          </template>
        </template>
      </div>
    </div>
  </sheet-page>
  <get-purse
    :show-get-purse="showGetPurse"
    type="task"
    :total-purse="totalPurse"
  ></get-purse>
</template>

<script setup lang="ts">
import { ref, defineExpose, nextTick, computed } from 'vue'
import sheetPage from '@/components/sheet-page/index.vue'
import type { ITaskProps } from '../resource/types'
import getPurse from '@/components/get-purse/index.vue'
import uuid from '@/utils/uuid'

// 新人专享
const newPeopleList = ref<ITaskProps[]>([
  {
    id: uuid(),
    title: '收藏人人租机小程序',
    purse: 30,
    isSend: true,
    icon: 'logistics'
  },
  {
    id: uuid(),
    title: '进行实名认证',
    purse: 30,
    isSend: false,
    icon: 'vip-card-o'
  }
])
// 每日签到
const dayList = ref<ITaskProps[]>([
  {
    id: uuid(),
    title: '逛一逛活动页',
    purse: 30,
    isSend: true,
    icon: 'paid'
  },
  {
    id: uuid(),
    title: '逛一逛首页',
    purse: 30,
    isSend: false,
    icon: 'paid'
  },
  {
    id: uuid(),
    title: '逛一逛生活页',
    purse: 30,
    isSend: false,
    icon: 'paid'
  },
  {
    id: uuid(),
    title: '去分享',
    purse: 30,
    isSend: false,
    icon: 'share-o'
  }
])

// 计算已获得租币数目
const getTotalPurse = computed(() => {
  const newPeopleCount = newPeopleList.value
    .filter((i) => i.isSend)
    .reduce((pre, next) => pre + next.purse, 0)
  const dayCount = dayList.value
    .filter((i) => i.isSend)
    .reduce((pre, next) => pre + next.purse, 0)
  return newPeopleCount + dayCount
})

const showGetPurse = ref(false)
const totalPurse = ref(0)
const sheetRef = ref<InstanceType<typeof sheetPage> | null>(null)

function changeModal(state = true) {
  if (sheetRef.value) {
    sheetRef.value.showSheetModal = state
  }
}

async function handlePurse(item: ITaskProps, type = 'new') {
  if (!item.isSend) {
    if (type === 'new') {
      const selectItem = newPeopleList.value.find((i) => i.id === item.id)
      selectItem && (selectItem.isSend = true)
    } else {
      const selectItem = dayList.value.find((i) => i.id === item.id)
      console.log(selectItem, 'selectItem')
      selectItem && (selectItem.isSend = true)
    }
    showGetPurse.value = true
    totalPurse.value = item.purse
    await nextTick()
    setTimeout(() => {
      showGetPurse.value = false
    }, 2000)
  }
}
defineExpose({
  changeModal
})
</script>

<style scoped lang="less">
@import url(@/assets/css/mixins.less);
.task-wrap {
  .title-wrap {
    position: sticky;
    top: 0;
    z-index: 9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // position: relative;
    width: 100%;
    height: 79px;
    background: linear-gradient(147deg, #7ad38c 0%, #40cbbe 100%);
    .close-btn {
      position: absolute;
      right: 10px;
      top: 10px;
      font-size: 27px;
      color: #fff;
    }
    .title {
      height: 30px;
      font-size: 21px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #ffffff;
      line-height: 30px;
    }
    .desc {
      height: 23px;
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #ffffff;
      line-height: 20px;
    }
    .number {
      color: #fff48d;
    }
  }

  .content {
    background: #e9faf4;
    padding: 11px 12px 20px 13px;
    .content-title {
      height: 24px;
      font-size: 17px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #133c37;
      line-height: 24px;
      padding-left: 10px;
    }
    .item {
      display: flex;
      align-items: center;
      // .flex-layout(space-between);
      background: #ffffff;
      box-shadow: 0px 2px 6px 0px rgba(44, 93, 88, 0.06);
      border-radius: 6px;
      padding: 12px;
      margin-top: 10px;
      .icon {
        .flex-layout();
        width: 49px;
        height: 49px;
        background: rgba(114, 208, 160, 0.1);
        border-radius: 50%;
        font-size: 20px;
        margin-right: 10px;
      }
      .title {
        height: 21px;
        font-size: 15px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #333333;
        line-height: 21px;
        flex: 1;
      }
      .gray-btn {
        .flex-layout();
        padding: 4px 10px;
        border-radius: 14px;
        border: 1px solid #999999;
        width: 42px;
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #999999;
      }
      .orange-btn {
        .flex-layout();
        padding: 4px 10px;
        border-radius: 14px;
        border: 1px solid #ff7f00;
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #ff7f00;
      }
    }
  }
}
</style>
