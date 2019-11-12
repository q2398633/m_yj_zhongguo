<template>
  <div class="login_container">
    <!-- 卡片 -->
    <img src="../../assets/Logo.png" alt="LOGO" />
    <!-- 登录页 用户表单 -->
    <van-nav-ber title="登录" />
    <form action="/" method="POST" ref="loginForm" :model="loginForm" :rules="loginRules">
      <van-cell-group>
        <van-field
          v-model="loginForm.username"
          prop="account"
          clearable
          label="用户名"
          right-icon="question-o"
          placeholder="请输入用户名"
          left-icon="contact"
          @click-right-icon="$toast('用户名必须是手机号')"
          style="margin-bottom: 5px;"
        />

        <van-field
          v-model="loginForm.password"
          clearable
          prop="code"
          type="password"
          label="密码"
          right-icon="question-o"
          placeholder="请输入密码"
          left-icon="closed-eye"
          @click-right-icon="$toast('密码必须是数字、字母、下划线')"
          @touchstart.native.stop="show = true"
        />
        <van-number-keyboard
          v-model="user.password"
          :show="show"
          :maxlength="12"
          @blur="show = false"
        />
        <!--登录按钮-->
        <div class="pd15">
          <van-button
            color="linear-gradient(to right, #4bb0ff, #6149f6)"
            size="large"
            @click="onClickButtonSubmit"
            style="border-radius: 3px;"
          >登录</van-button>
          <van-button
            color="linear-gradient(to left, #4bb0ff, #6149f6)"
            size="large"
            @click="onClickButtonSubmit2"
            style="border-radius: 3px;"
          >注册</van-button>
        </div>

        <!-- 第三方登录 -->
        <div class="Third_Party">
          <div class="login_left">其他登录方式:</div>
          <a href="#">
            <img src="../../assets/13.png" alt="WB登录" style="margin-top: 5px;" />
          </a>
          <a href="#">
            <img src="../../assets/12.png" alt="WX登录" style="margin-top: 9px;" />
          </a>
          <a href="#">
            <img src="../../assets/11.png" alt="QQ登录" style="margin-top: 5px" />
          </a>
        </div>
        <div class="Forget-PassWord">
          <a href="#">忘记密码?</a>
        </div>
      </van-cell-group>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginIndex",
  data() {
      const checkuser = (rule, value, callback) => {
        // 逻辑校验
        if (/^1[3-9]\d{9}$/.test(value)) {
          callback()
        } else {
          callback(new Error('账号格式不对'))
          }
      };
      return {
        // 表单对应对象
        loginForm: {
          account:'17331038189',
          code: '246810'
        },
        // 表单的校验规则对象
        loginRules: {
          account: [
            // 具体校验规则 长度 格式等
            {required: true, message: '账号必填', tigger:'blur'}, 
            {validator: checkMobile, trigger:'blur'}
          ],
          code: [
            { required: true, message: '密码必填', trigger: 'blur' },
            { len: 6, message: '必须是6位', trigger: 'blur' }
          ]
        }
      }
  },
  methods: {
    login() {
      // 整体表单的校验
      this.$refs.loginForm.validate(valid => {
        if(valid) {
          // 校验成功 进行登录
          this.$http
          .post(
              'http://ttapi.research.itcast.cn/mp/v1_0/authorizations',
              this.loginForm
          )
          .then(res => {
            // res响应对象
            const data = res.data
            console.log(data)
            // 登录成功,跳转至首页, 保存登录状态
            this.$router.push('/')
          })
          .catch(() => {
            // 提示错误
            this.$message.error('用户名或密码错误')
          })
        }
      })
    }
  },

};
</script>

<style scoped lang="less">
.login_container {
  width: 100%;
  height: 100%;
  float: left;
  position: absolute;
  left: 0;
  top: 0;
  background: url("../../assets/Login_Bg.jpg") no-repeat center / cover;

  img {
    width: 3.6rem;
    margin-left: 3.2rem;
    margin-top: 3.2rem;
    margin-bottom: 1.1rem;
    border-radius: 21%;
  }
  .van-cell-group {
    float: left;
    padding: 25px;
    margin-left: 19px;
    margin-right: 19px;
    border-radius: 10px;
  }
  .van-field {
    padding: 25px;
    float: left;
  }
  .Third_Party {
    width: 100%;
    float: right;
    .login_left {
      float: left;
      font-size: 25px;
      margin-top: 35px;
      margin-left: 12px;
      color: #736b6b;
    }
    a {
      float: right;
      margin-right: 20px;
      margin-top: 10px;
    }
    img {
      width: 60px;
      margin: 0 0 0 0;
    }
  }
  .Forget-PassWord {
    float: left;

    a {
      float: left;
      font-size: 25px;
      margin-top: 20px;
      margin-left: 12px;
      color: #736b6b;
      a:hover {
        background-color: yellow;
      }
    }
  }
}
</style>