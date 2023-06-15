<template>
  <div class="banner-wrap">
    <!-- 消息 -->
    <div class="icon-item message" @click="goNotice">
      <img src="@/assets/image/home/message.png" alt="" />
    </div>
    <div class="message-total">2</div>
    <!-- 规则 -->
    <div class="icon-item rules">
      <img src="@/assets/image/home/rules.png" alt="" />
    </div>
    <!-- 金币 -->
    <div class="sign-item purse">
      <div class="img">
        <img src="@/assets/image/home/purse.png" alt="" />
      </div>
      <div class="title">32</div>
    </div>
    <!-- 签到 -->
    <div class="sign-item sign" @click="handleSign">
      <div class="img">
        <img src="@/assets/image/home/sign.png" alt="" />
        <!-- 未签到展示 -->
        <div class="no-sign" v-if="!initState.userInfo.isSign"></div>
      </div>
      <div class="title">
        {{ initState.userInfo.isSign ? '已签到' : '未签到' }}
      </div>
    </div>

    <!-- 加租币区域 -->
    <template v-if="iconList.length">
      <div class="icon-wrap">
        <template v-for="(item, index) of iconList" :key="item.id">
          <div class="icon-item" :id="`icon-${index}`">
            <div class="title">{{ item.title }}</div>
            <div class="img">
              <img :src="item.icon" alt="" />
            </div>
          </div>
        </template>
      </div>
    </template>
    <!-- 今日步数 -->
    <div class="day-wrap">
      <div class="day-tip">
        <div class="left">
          <img src="@/assets/image/home/boy.png" alt="" />
        </div>
        <div class="center">
          <div class="title">今日步数</div>
          <div class="count">2748</div>
          <div class="tip">每日24:00自动清零</div>
        </div>
        <div class="right">
          <img src="@/assets/image/home/girl.png" alt="" />
        </div>
      </div>
      <div class="send-btn">瓜分888现金</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'
import userStore from '@/store/module/user'
import { storeToRefs } from 'pinia'
import { showSuccessToast } from '@/hooks/use-vant'
import { useRouter } from 'vue-router'
import type { IIconProps } from '../resource/types'

interface IProps {
  iconList: IIconProps[]
}

defineProps<IProps>()

const router = useRouter()
const user = userStore()
const { initState } = storeToRefs(user)

function handleSign() {
  let { isSign } = initState.value.userInfo
  if (!isSign) {
    initState.value.userInfo.isSign = !isSign
    showSuccessToast('签到成功')
  }
}

function goNotice() {
  router.push('/notice')
}

// function renderIcon() {
//   if (props.iconList.length) {
//     props.iconList.forEach((_, index) => {
//       getTopPosition(index)
//     })
//   }
// }

// onMounted(() => renderIcon())
// function getTopPosition(index: number) {
//   const antForestBallItem: any = document.getElementById(`icon-${index}`)
//   if (antForestBallItem) {
//     antForestBallItem.style.position = 'absolute'
//     antForestBallItem.style.left = `${((60 - 42.5 + index * 10) / 100) * 100}%`
//     antForestBallItem.style.top = `${((60 - 42.5 + index * 200) / 100) * 100}%` // 使用%定位
//   }
// }
</script>

<style scoped lang="less">
@import '@/assets/css/mixins.less';
.banner-wrap {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 396px;
  background: url(../../../assets/image/home/home-bg.png) no-repeat center;
  background-size: contain;
  .icon-item {
    width: 28px;
    height: 36px;
  }
  .sign-item {
    width: 70px;
    height: 30px;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 13px 0px 0px 13px;
    display: flex;
    align-items: center;
  }
  .message {
    position: absolute;
    top: 15px;
    left: 10px;
  }
  .message-total {
    .flex-layout();
    position: absolute;
    top: 10px;
    left: 29px;
    width: 12px;
    height: 12px;
    background: #ff876a;
    border: 1px solid #ffffff;
    border-radius: 50%;
    font-size: 8px;
    color: #ffffff;
  }
  .rules {
    position: absolute;
    top: 60px;
    left: 10px;
  }
  .purse {
    position: absolute;
    right: 0;
    top: 20px;
    .img {
      width: 24px;
      height: 28px;
      margin: 0 3px 0 5px;
    }

    .title {
      font-size: 16px;
      font-family: DINAlternate-Bold, DINAlternate;
      font-weight: bold;
      color: #027c64;
    }
  }
  .sign {
    position: absolute;
    right: 0;
    top: 62px;
    .img {
      width: 24px;
      height: 24px;
      margin: 0 3px 0 5px;
      position: relative;
      .no-sign {
        position: absolute;
        right: -1px;
        top: -1px;
        width: 8px;
        height: 8px;
        background-color: #ff611c;
        border-radius: 50%;
      }
    }
    .title {
      font-size: 11px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #105b50;
    }
  }

  .icon-wrap {
    display: flex;
    justify-content: center;
    width: 100%;
    position: absolute;
    top: 85px;
    .icon-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      width: 48px;
      margin-right: 10px;
      &:nth-child(1) {
        top: 30px;
      }
      &:nth-child(2) {
        top: 10px;
      }
      &:nth-child(3) {
        top: 15px;
      }
      &:nth-child(4) {
        top: 10px;
      }
      &:last-child {
        top: 30px;
        margin-right: 0;
      }
      .title {
        height: 11px;
        font-size: 11px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #105b50;
        line-height: 11px;
      }
      .img {
        width: 48px;
        height: 48px;
        // animation: iconSport 2s linear infinite;
      }
    }
  }
  .day-wrap {
    .flex-layout();
    flex-direction: column;
    position: absolute;
    bottom: 50px;
    width: 100%;
    .day-tip {
      .flex-layout();
      align-items: end;
      background: linear-gradient(
        360deg,
        rgba(255, 255, 255, 0) 0%,
        #ffffff 100%
      );
      border-radius: 50%;

      .title {
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
        padding-top: 20px;
      }
      .count {
        font-size: 55px;
        font-family: DINCondensed-Bold, DINCondensed;
        font-weight: bold;
        color: #084f3e;
        position: relative;
        top: 10px;
      }
      .left {
        width: 33px;
        height: 62px;
      }
      .center {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .tip {
        height: 12px;
        font-size: 12px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #999999;
        padding-bottom: 16px;
      }
      .right {
        width: 38px;
        height: 52px;
        img {
          position: relative;
          right: -4px;
        }
      }
    }
    .send-btn {
      .flex-layout();
      width: 225px;
      height: 44px;
      background: linear-gradient(360deg, #fa5721 0%, #ffa901 100%);
      box-shadow: 0px 5px 20px 0px rgba(234, 255, 124, 0.8);
      border-radius: 25px;
      font-size: 20px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #ffffff;
    }
  }
}

@keyframes iconSport {
  0% {
    transform: translateY(10px);
  }
  25% {
    transform: translateY(8px);
  }
  50% {
    transform: translateY(5px);
  }
  75% {
    transform: translateY(3px);
  }
  100% {
    transform: translateY(0);
  }
}
</style>
