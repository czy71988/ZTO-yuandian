<template>
  <div>
    <el-container>
      <!-- 中间部分 -->
      <el-container>
        <!-- 中间左侧部分 -->
        <el-aside width="200px">
          <el-row class="tac">
            <el-col :span="12">
            <div class="index_top"><img src="../assets/Image 1@2x.png" alt="">
            中通云店
            </div>
              <el-menu
                :default-active="$route.path"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                unique-opened
                background-color="#202020"
                text-color="#666666"
                router
                active-text-color="#FFFFFF">

                <el-submenu index="1">
                  <template slot="title">
                    <!-- <i class="el-icon-location"></i> -->
                    <img class="dsfg" src="../assets/编组 3@2x(1).png" alt="">
                    <span :class="index === '1' ? 'sdawe' : ''">用户管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="/uers">用户管理</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>

                <el-submenu index="2">
                  <template slot="title">
                    <!-- <i class="el-icon-location"></i> -->
                    <img class="dsfg" src="../assets/编组 4@2x.png" alt="">
                    <span :class="index === '2' ? 'sdawe' : ''">广告配置</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="/BANNER">Banner配置</el-menu-item>
                    <el-menu-item index="/advertising">类目ICON配置</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>

                <el-submenu index="3">
                  <template slot="title">
                    <!-- <i class="el-icon-location"></i> -->
                    <img class="dsfg" src="../assets/编组 5@2x.png" alt="">
                    <span :class="index === '3' ? 'sdawe' : ''">商品管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="/shopList">商品列表</el-menu-item>
                    <el-menu-item index="/shopType">商品类目创建</el-menu-item>
                    <el-menu-item index="/Commodi">商品管理</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>

                <!-- <el-menu-item index="4">
                  <i class="el-icon-setting"></i>
                  <span slot="title">后台角色</span>
                </el-menu-item> -->

                <el-submenu index="4">
                  <template slot="title">
                    <!-- <i class="el-icon-location"></i> -->
                    <img class="dsfg" src="../assets/编组 7@2x.png" alt="">
                    <span :class="index === '4' ? 'sdawe' : ''">订单管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="/uersorder">用户订单</el-menu-item>
                    <el-menu-item index="/ordergoods">订货订单</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>

                <el-submenu index="5">
                  <template slot="title">
                    <!-- <i class="el-icon-location"></i> -->
                    <img class="dsfg" src="../assets/编组 8@2x.png" alt="">
                    <span :class="index === '5' ? 'sdawe' : ''">系统设置</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="/mendian">门店管理</el-menu-item>
                    <el-menu-item index="/wangidan">网点管理</el-menu-item>
                    <el-menu-item index="/zhongxin">中心仓管理</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>
        </el-aside>
        <!-- 中间右侧部分 -->
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      index: ''
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      this.index = key
      console.log(this.index)
    },
    handleClose (key, keyPath) {
    }
  }
}
</script>

<style lang="less">
  .el-header {
    height: 120px !important;
    background-color: #202020;
    font-size: 32px;
    color: #333;
    text-align: center;
    line-height: 120px;
  }

  .el-aside {
    /* height: 100vh; */
    background-color:#202020;
    color: #333;
    /* text-align: center; */
    line-height: 200px;
    .index_top {
      height: 89px;
      background: #0D0C0C;
      line-height: 35px;
      font-size: 18px;
      font-family: MicrosoftYaHei;
      color: #FFFFFF;
      line-height: 89px;
      text-align: center;
      img {
        width: 55px;
        height: 35px;
        vertical-align: middle;
      }
    }
  }

  .el-container {
    /* margin-bottom: 40px; */
    height: 100vh;
  }
  .el-main {
    /* background-color: #E9EEF3; */
    color: #333;
    /* text-align: center; */
    /* line-height: 160px; */
    padding: 0 !important;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  .el-col-12 {
    width: 200px !important;
  }
  .el-menu {
    background-color: none !important;
    /* height: calc(100vh - 120px); */
  }
</style>

<style lang="less" scoped>
.dsfg {
  width: 15px;
  height: 15px;
  margin-right: 5px;
}
.sdawe {
  color: #FFFFFF;
}
</style>
