<template>
  <div class="shopList">
    <!-- 头部部分 -->
    <div class="BanNer_top">
      <p><span></span>用户管理  用户列表</p>
      <!-- <div @click="chuangjian">创建Banner</div> -->
      <div class="BanNer_top_p">
        <span>手机号：</span>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <span>是否是会员：</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <div>
          <span>搜索</span>
          <span>批量导出</span>
        </div>
      </div>
    </div>
    <!-- 内容部分 -->
    <div class="BanNer_content">
      <template>
        <el-table
          :data="tableData"
          stripe
          style="width: 100%">
          <el-table-column
            prop="ID"
            align="center"
            label="ID">
          </el-table-column>
          <el-table-column
            prop="shop"
            align="center"
            width="100"
            label="是否商家">
          </el-table-column>
          <el-table-column
            prop="phone"
            align="center"
            label="手机号"
            width="120">
          </el-table-column>
          <el-table-column
            prop="time"
            align="center"
            label="注册时间"
            width="120">
          </el-table-column>
          <el-table-column
            prop="number"
            align="center"
            width="120"
            label="购买单数">
          </el-table-column>
          <el-table-column
            prop="out"
            align="center"
            width="120"
            label="购买总金额">
          </el-table-column>
          <el-table-column
            prop="weizhi"
            align="center"
            label="所在位置">
          </el-table-column>
          <el-table-column
            prop="shopH"
            align="center"
            label="所属门店">
          </el-table-column>
          <el-table-column
            align="center"
            label="启用/禁用"
            width="100">
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.ying"
                active-value="0"
                inactive-value="1"
                active-color="#13ce66"
                inactive-color="#ff4949">
              </el-switch>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>
    <!-- 分页 -->
    <div class="bottom_bottom">
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage1"
          :page-size="100"
          layout="total, prev, pager, next"
          :total="1000">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        { ID: '123', shop: '否', phone: '18321201141', time: '2020/09/12', number: '9', out: '3000', weizhi: '中通快递一号门', shopH: '中通快递一号门', ying: '0' },
        { ID: '234', shop: '否', phone: '18321201141', time: '2020/09/12', number: '9', out: '3000', weizhi: '中通快递一号门', shopH: '中通快递一号门', ying: '1' },
        { ID: '345', shop: '否', phone: '18321201141', time: '2020/09/12', number: '9', out: '3000', weizhi: '中通快递一号门', shopH: '中通快递一号门', ying: '1' },
        { ID: '456', shop: '否', phone: '18321201141', time: '2020/09/12', number: '9', out: '3000', weizhi: '中通快递一号门', shopH: '中通快递一号门', ying: '1' },
        { ID: '567', shop: '否', phone: '18321201141', time: '2020/09/12', number: '9', out: '3000', weizhi: '中通快递一号门', shopH: '中通快递一号门', ying: '0' },
        { ID: '678', shop: '否', phone: '18321201141', time: '2020/09/12', number: '9', out: '3000', weizhi: '中通快递一号门', shopH: '中通快递一号门', ying: '0' },
        { ID: '789', shop: '否', phone: '18321201141', time: '2020/09/12', number: '9', out: '3000', weizhi: '中通快递一号门', shopH: '中通快递一号门', ying: '1' },
        { ID: '444', shop: '否', phone: '18321201141', time: '2020/09/12', number: '9', out: '3000', weizhi: '中通快递一号门', shopH: '中通快递一号门', ying: '0' },
        { ID: '555', shop: '否', phone: '18321201141', time: '2020/09/12', number: '9', out: '3000', weizhi: '中通快递一号门', shopH: '中通快递一号门', ying: '0' }
      ],
      dialogVisible: false,
      shopShow: false,
      biaotiname: '',
      currentPage1: 1,
      sdbgg: '',

      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      options: [
        { value: 1, label: '是' },
        { value: 2, label: '否' }
      ]
    }
  },
  mounted: {
  },
  methods: {
    // 分页
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  }
}
</script>

<style lang="less">
  .shopList {
    .BanNer_top_p {
      line-height: 20px;
      text-align: left;
      .el-input {
        height: 30px;
        display: inline-block;
        width: 200px;
        margin-right: 20px;
        .el-input__icon {
          line-height: 30px;
        }
      }
      .el-input__inner {
        height: 30px;
        line-height: 30px;
      }
    }
    .BanNer_content {
      .el-table {
        line-height: 40px !important;
        border-radius: 6px 6px 0px 0px;
      }
      .el-table th, .el-table {
        background: #163D70;
        font-size: 13px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #FFFFFF;
        td {
          padding: 0;
        }
        tr {
          color: #333333;
          font-weight: 400;
          font-family: MicrosoftYaHei;
          background-color: #E6EEFD;
        }
        .el-table__row--striped {
          background-color: #D7E5FB;
        }
      }
      .el-table--enable-row-hover .el-table__body tr:hover > td {
        background-color: #92cbf1;
      }
    }
    .bottom_bottom {
      .el-pager, .el-pager li {
        background-color: #D7E5FB;
      }
      .el-pagination .btn-next, .el-pagination .btn-prev {
        background-color: #D7E5FB;
      }
    }
  }
</style>

<style lang="less" scoped>
  .shopList {
    padding: 0 15px;
    box-sizing: border-box;
    // ---------------------------
    .BanNer_top {
      position: relative;
      // height: 90px;
      .BanNer_top_p {
        div {
          margin-bottom: 40px;
          text-align: center;
          span {
            display: inline-block;
            width: 100px;
            height: 35px;
            background: #2B80FD;
            border-radius: 18px;
            font-size: 12px;
            font-family: MicrosoftYaHei;
            color: #FFFFFF;
            line-height: 35px;
            text-align: center;
          }
          span:last-child {
            background: #FF8C14;
            margin-left: 40px;
          }
        }
      }
      p {
        text-align: left;
        line-height: 90px;
        font-size: 18px;
        font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
        font-weight: bold;
        color: #2B80FD;
        span {
          display: inline-block;
          width: 7px;
          height: 7px;
          border-radius: 4px;
          background: #2B80FD;
          margin: 0 10px;
        }
      }
    }
    // -----------------------------
    .BanNer_content {
      margin-top: 10px;
    }
    .bottom_bottom {
      height: 40px;
      padding: 0 50px;
      background: #D7E5FB;
      border-radius: 0px 0px 6px 6px;
      box-sizing: border-box;
      .block {
        display: inline-block;
        float: right;
      }
    }
  }
</style>
