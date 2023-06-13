<template>
  <div class="banner-wrap">
    <!-- 用户信息 -->
    <div class="user-info">
      <div class="user-desc">
        <div class="avatar">
          <img
            v-if="initState.userInfo.avatar"
            :src="initState.userInfo.avatar"
            alt="avatar"
          />
        </div>
        <div class="user-name">
          {{ initState.userInfo.username ?? '未登录' }}
        </div>
      </div>
      <div class="rules">
        <van-icon name="question-o" class="f-14" />
        规则
      </div>
    </div>
    <div class="purse-title">可用租币</div>
    <div class="user-purse">
      <div class="purse">{{ initState.userInfo.purse ?? 1560 }}</div>
      <div class="purse-btn">
        <img src="@/assets/image/shopping/goods-btn.png" alt="" />
      </div>
    </div>
    <div class="banner-logo">
      <img src="@/assets/image/shopping/goods-bg-logo.png" alt="goodsBgLogo" />
    </div>
  </div>
  <div class="scroll-wrap">
    <template v-for="(item, index) of itemList" :key="index">
      <div class="scroll-item" :style="{ backgroundColor: item }"></div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import userStore from '@/store/module/user'
import { storeToRefs } from 'pinia'

const user = userStore()
const { initState } = storeToRefs(user)
const itemList = ref<string[]>(['#fffdca', '#ffeae9', '#dbfcf7'])
</script>

<style scoped lang="less">
@import '@/assets/css/mixins.less';

.scroll-wrap {
  position: relative;
  top: -34px;
  box-sizing: border-box;
  white-space: nowrap;
  overflow: hidden;
  overflow-x: auto;
  padding: 0 15px;
  .scroll-item {
    width: 134px;
    height: 69px;
    margin-right: 10px;
    background: #008c8c;
    display: inline-block;
    border-radius: 10px;
    &:last-child {
      margin-right: 0;
    }
  }
}
.banner-wrap {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 160px;
  background: linear-gradient(138deg, #ff8a3c 0%, #ff611c 100%);
  border-radius: 0px 0px 0px 20px;
  padding: 10px 15px 0 15px;
  box-sizing: border-box;
  font-family: PingFangSC-Regular, PingFang SC;

  .user-info {
    .flex-layout(space-between, center);
    .user-desc {
      .flex-layout();
      .avatar {
        width: 32px;
        height: 32px;
        background: #d8d8d8;
        border: 1px solid #ffffff;
        border-radius: 50%;
        margin-right: 10px;
        img {
          border-radius: 50%;
        }
      }
      .user-name {
        .flex-layout();
        height: 20px;
        background: rgba(255, 255, 255, 0.1043);
        color: #fff;
        border-radius: 1px;
        font-size: 12px;
        font-weight: 400;
        padding: 2px 4px;
      }
    }
    .rules {
      .flex-layout();
      font-size: 13px;
      font-weight: 400;
      color: #ffffff;
    }
  }

  .purse-title {
    height: 12px;
    font-size: 12px;
    font-weight: 400;
    color: #ffffff;
    line-height: 12px;
    margin: 15px 0 4px 0;
  }
  .user-purse {
    display: flex;
    justify-content: space-between;
    .purse {
      height: 40px;
      font-size: 40px;
      font-family: DINAlternate-Bold, DINAlternate;
      font-weight: bold;
      color: #ffffff;
      line-height: 40px;
    }
    .purse-btn {
      width: 130px;
      height: 56px;
    }
  }
  .banner-logo {
    width: 120px;
    height: 105px;
    position: absolute;
    bottom: 0;
    left: 45px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
