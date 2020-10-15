<template>
  <div class="Login">
    <div class="Login_div">
      <p>中通云店·后台管理系统</p>
      <div class="Login_divs">
        <span>账号：</span>
        <span><el-input v-model="from.phone" placeholder="请输入账号"></el-input></span>
      </div>
      <div class="Login_divs">
        <span>密码：</span>
        <span><el-input v-model="from.password"  show-password placeholder="请输入密码"></el-input></span>
      </div>
      <div class="Login_btn">
        <span @click="login">登录</span>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      from: {
        phone: '',
        password: ''
      }
    }
  },
  methods: {
    login () {
      this.$router.push({ name: 'index' })
    }
  }
}
</script>

<style lang="less">
  .Login {
    .Login_div {
      div {
        span {
          .el-input {
            display: inline-block;
            width: 100%;
            .el-input__inner {
              width: 100%;
              height: 54px;
              line-height: 54px;
              font-size: 24px;
              font-family: MicrosoftYaHei;
            }
            .el-input__suffix {
              width: 40px;
              .el-input__suffix-inner {
                width: 40px;
              }
            }
          }
          input::placeholder {
            text-align: center;
            font-size: 24px;
            font-family: MicrosoftYaHei;
            color: #999999;
          }
        }
      }
    }
  }
</style>

<style lang="less">
  .Login {
    width: 100vw;
    height: 100vh;
    background: url('../assets/编组 3@2x.png') left bottom/auto 100% no-repeat;
    .Login_div {
      width: 50%;
      float: right;
      margin-top: 200px;
      p {
        font-size: 36px;
        font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
        font-weight: bold;
        color: #2E6DE4;
        padding-left: 55px;
        box-sizing: border-box;
        margin-bottom: 70px;
      }
      .Login_divs {
        width: 546px;
        height: 54px;
        margin-bottom: 20px;
        span:first-child {
          display: inline-block;
          width: 75px;
          font-size: 24px;
          font-family: MicrosoftYaHei;
          color: #333333;
          line-height: 54px;
        }
        span:last-child {
          width: calc(100% - 75px);
          display: inline-block;
        }
      }
      .Login_btn {
        width: 546px;
        margin-top: 70px;
        span {
          display: inline-block;
          width: 270px;
          height: 55px;
          background: linear-gradient(157deg, #56B7FF 0%, #2B80FD 100%);
          border-radius: 32px;
          text-align: center;
          line-height: 55px;
          font-size: 24px;
          font-family: MicrosoftYaHei;
          color: #FFFFFF;
          margin-left: 50%;
          transform: translateX(-50%);
        }
      }
    }
  }
</style>
