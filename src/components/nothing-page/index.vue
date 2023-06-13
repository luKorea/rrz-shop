<template>
  <div class="nothing">
    <div class="img">
      <img src="@/assets/image/notice/nothing.png" alt="" />
    </div>
    <div class="title">暂无消息</div>
  </div>
</template>

<style scoped lang="less">
@import url(@/assets/css/mixins.less);
.nothing {
  .flex-layout();
  flex-direction: column;
  margin-top: 50px;
  .img {
    width: 160px;
    height: 160px;
  }
  .title {
    height: 16px;
    font-size: 16px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #999999;
    line-height: 16px;
    margin-top: 10px;
  }
}
</style>
