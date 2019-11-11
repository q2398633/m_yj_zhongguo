<template>
  <div class="Home_Index">
    <!-- 导航栏 -->
    <div class="Nav_Top">
      <van-nav-bar title="人力和幼儿园" left-text="返回登录" left-arrow>
        <van-icon name="scan" slot="right" size="23px" />
      </van-nav-bar>
    </div>
    <!-- 版心轮播图 -->
    <div class="Layout_RC">
      <van-swipe @change="onChange">
        <van-swipe-item>
          <img src="../../assets/1.png" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/2.png" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/3.png" alt="">
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/4.png" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeIndex",
  data() {},
  methods: {
    onChange(index) {
      this.$Toast("当前 Swipe 索引：" + index);
    }
  }
};
</script>

<style lang="less" scoped>
  .van-swipe-item {
    img {
      width: 100%
    }
  }
</style>