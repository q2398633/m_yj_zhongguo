
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
          <img src="../../assets/1.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/2.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/3.png" alt />
        </van-swipe-item>
        <van-swipe-item>
          <img src="../../assets/4.png" alt />
        </van-swipe-item>
      </van-swipe>
    </div>
    <!-- 菜单大全 -->
    <div class="menu">
      <div class="menu_left">菜单</div>
      <div class="menu_right">更多</div>
    </div>
    <div class="menu_Layout">
      <div class="flex">
        <van-button icon="star-o" type="primary" />
      </div>
      <div class="flex">
        <van-button icon="star-o" type="info" />
      </div>
      <div class="flex">
        <van-button icon="star-o" type="warning" />
      </div>
      <div class="flex">
        <van-button icon="star-o" type="danger" />
      </div>
      <div class="flex">
        <van-button icon="star-o" color="#7232dd" />
      </div>
      <div class="flex">
        <van-button icon="star-o" color="linear-gradient(to right, #4bb0ff, #6149f6)" />
      </div>
      <div class="flex">
        <van-button icon="star-o" color="linear-gradient(to left, #4bb0ff, #6149f6)" />
      </div>
      <div class="flex">
        <van-button icon="star-o" color="linear-gradient(to top, #4bb0ff, #6149f6)" />
      </div>
      <div class="flex">
        <van-button icon="star-o" color="linear-gradient(to bottom, #4bb0ff, #6149f6)" />
      </div>
      <div class="flex">
        <van-button icon="star-o" color="linear-gradient(to right, #4ab0ff, #6149f6)" />
      </div>
      <div class="flex">
        <van-button icon="star-o" color="linear-gradient(to right, #4ab0ff, #3149f6)" />
      </div>
      <div class="flex">
        <van-button icon="star-o" color="linear-gradient(to right, #1a20ff, #6149f6)" />
      </div>
    </div>
    <div style="clear:both"></div>
    <!-- 图表 -->
    <div class="echarts">
      <div class="echarts_left">图表</div>
    </div>
    <!-- 底部菜单 -->
    <div class="menu_bottom">
    
    </div>
  </div>
</template>

<script src=""></script>
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
.Home_Index {
  width: 100%;
  height: 100%;
  float: left;
  position: absolute;
  left: 0;
  top: 0;
  background: url("../../assets/Login_Bg4.jpg") no-repeat center / cover;
}
.van-swipe-item {
  img {
    width: 100%;
  }
}
.menu {
  position: relative;
  font-size: 38px;
  font-family: "楷体";
  color: linear-gradient(to left, #4bb0ff, #6149f6);

  .menu_left {
    position: absolute;
    left: 0;
    top: 0;
    margin-left: 30px;
  }
  .menu_right {
    position: absolute;
    right: 0;
    top: 0;
    margin-right: 30px;
  }
}
.menu_Layout {
  position: absolute;
  top: 55%;
  padding: 0 0 30px 55px;
  margin-bottom: 30px;

  .flex {
    width: 25%;
    display: inline-block;
  }
  .van-button {
    // margin-right: 45px;
  }
  .echarts {
  }
  .menu_bottom {
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
  }
}
</style>