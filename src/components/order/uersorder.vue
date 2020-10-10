<template>
  <div class="shopList">
    <!-- 头部部分 -->
    <div class="BanNer_top">
      <p><span></span>订单管理  订单列表</p>
      <!-- <div @click="chuangjian">创建Banner</div> -->
      <div class="BanNer_top_p">
        <span>创建时间：</span>
        <el-date-picker
          v-model="value1"
          type="daterange"
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
        <span>订单号：</span>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <div>
          <span>重置</span>
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
            label="订单编号">
          </el-table-column>
          <el-table-column
            prop="shop"
            align="center"
            label="下单时间">
          </el-table-column>
          <el-table-column
            prop="phone"
            align="center"
            label="收件人信息">
          </el-table-column>
          <el-table-column
            prop="time"
            align="center"
            label="物流方式">
          </el-table-column>
          <el-table-column
            prop="number"
            align="center"
            label="实付金额">
          </el-table-column>
          <el-table-column
            prop="out"
            align="center"
            label="订单状态">
          </el-table-column>
          <el-table-column
            prop="weizhi"
            align="center"
            label="所属门店">
          </el-table-column>
          <el-table-column
            prop="shopH"
            align="center"
            label="所属网点">
          </el-table-column>
          <el-table-column
            prop="time"
            align="center"
            label="所属中心">
          </el-table-column>
          <el-table-column
            prop="shopH"
            align="center"
            label="买家手机号">
          </el-table-column>
          <el-table-column
            align="center"
            label="查看详情"
            width="80">
            <template slot-scope="scope">
              <span class="sdreg" @click="bianji(scope.row)"><i class="el-icon-edit"></i>详情</span>
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
    <!-- 弹窗部分 -- 编辑/创建 -->
    <div class="mendian_diagio">
      <el-dialog
        :visible.sync="dialogVisible">
        <p class="sdsd">订单详情</p>
        <div class="uers_dialog">
          <p class="uers_p">
            <span></span>
            <span>订单信息</span>
          </p>
          <p class="uers_p1">
            <span>订单号：319641524981727232</span>
            <span>订单状态：订单完成</span>
            <span>实付金额：100.00元</span>
          </p>
          <p class="uers_p">
            <span></span>
            <span>订单信息</span>
          </p>
          <p class="uers_p1">
            <span>收货人姓名：凡高高</span>
            <span>手机号：15812345678</span>
            <span>详细地址：中通快递一号门.00元</span>
            <span>物流方式：自提</span>
          </p>
          <p class="uers_p">
            <span></span>
            <span>订单信息</span>
          </p>
          <div>
            <ul class="uers_log">
              <li>商品ID</li>
              <li>图片</li>
              <li>名称</li>
              <li>价格</li>
              <li>数量</li>
            </ul>
            <ul class="uers_logs">
              <li>
                <span>001</span>
                <span><img src="../../assets/编组 19@3x@2x.png" alt=""></span>
                <span>香菇</span>
                <span>20</span>
                <span>1</span>
              </li>
            </ul>
          </div>
        </div>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [
        { ID: '123', shop: '否', phone: '陈志英', time: '2020/09/12', number: '启用', out: '3000', weizhi: '中通快递一号门', shopH: '中通快递一号门', ying: '0' },
        { ID: '234', shop: '否', phone: '陈志英', time: '2020/09/12', number: '9', out: '3000', weizhi: '中通快递一号门', shopH: '中通快递一号门', ying: '1' },
        { ID: '345', shop: '否', phone: '陈志英', time: '2020/09/12', number: '9', out: '3000', weizhi: '中通快递一号门', shopH: '中通快递一号门', ying: '1' },
        { ID: '456', shop: '否', phone: '陈志英', time: '2020/09/12', number: '9', out: '3000', weizhi: '中通快递一号门', shopH: '中通快递一号门', ying: '1' },
        { ID: '567', shop: '否', phone: '陈志英', time: '2020/09/12', number: '9', out: '3000', weizhi: '中通快递一号门', shopH: '中通快递一号门', ying: '0' },
        { ID: '678', shop: '否', phone: '陈志英', time: '2020/09/12', number: '9', out: '3000', weizhi: '中通快递一号门', shopH: '中通快递一号门', ying: '0' },
        { ID: '789', shop: '否', phone: '陈志英', time: '2020/09/12', number: '9', out: '3000', weizhi: '中通快递一号门', shopH: '中通快递一号门', ying: '1' },
        { ID: '444', shop: '否', phone: '陈志英', time: '2020/09/12', number: '9', out: '3000', weizhi: '中通快递一号门', shopH: '中通快递一号门', ying: '0' },
        { ID: '555', shop: '否', phone: '陈志英', time: '2020/09/12', number: '9', out: '3000', weizhi: '中通快递一号门', shopH: '中通快递一号门', ying: '0' }
      ],
      dialogVisible: false,
      dialogVisible1: false,
      currentPage1: 1,

      form: {
        mendianname: '',
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
    },
    // 编辑按钮
    bianji () {
      this.dialogVisible = !this.dialogVisible
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

    .mendian_diagio {
      .el-dialog {
        width: 500px;
        // height: 430px;
        background: #FFFFFF;
        border-radius: 8px;
        .el-dialog__header {
          display: none;
        }
        .el-dialog__body {
          padding: 0;
          height: 100%;
          .sdsd {
            display: block;
            font-size: 18px;
            font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
            font-weight: bold;
            color: #FFFFFF;
            line-height: 40px;
            width: 500px;
            height: 40px;
            background: linear-gradient(249deg, rgba(255, 255, 255, 0.11) 0%, #164C92 100%);
            border-radius: 8px 8px 0px 0px;
            padding-left: 24px;
            box-sizing: border-box;
            text-align: left;
          }
          .el-form {
            box-sizing: border-box;
            .el-form-item {
              margin-bottom: 20px;
              height: 30px;
              line-height: 30px;
              .el-form-item__label {
                line-height: 30px;
              }
              .el-form-item__content {
                text-align: left;
                height: 30px;
                line-height: 30px;
                .el-input__inner {
                  line-height: 30px;
                  height: 30px;
                  width: 300px;
                  background: #F4F4F4;
                }
              }
            }
          }
        }
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
          span:first-child {
            background: #ffffff;
            color: #2B80FD;
            border: 1px solid #2B80FD;
            margin-right: 40px;
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
      .sdreg {
        font-size: 13px;
        font-family: MicrosoftYaHei;
        color: #2B80FD;
        line-height: 17px;
      }
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
    .mendian_diagio {
      .uers_dialog {
        padding: 10px;
        box-sizing: border-box;
        .uers_p {
          line-height: 37px;
          span {
            font-size: 13px;
            font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
            font-weight: bold;
            color: #2B80FD;
            margin-left: 5px;
          }
          span:first-child {
            display: inline-block;
            width: 4px;
            height: 4px;
            border-radius: 2px;
            background: #2B80FD;
          }
        }
        .uers_p1 {
          padding: 0 10px;
          box-sizing: border-box;
          span {
            display: inline-block;
            width: 50%;
            line-height: 25px;
          }
        }
        div {
          .uers_log {
            display: flex;
            line-height: 30px;
            background: #163D70;
            border-radius: 6px 6px 0px 0px;
            li {
              flex: 1;
              text-align: center;
              list-style: none;
              font-size: 13px;
              font-family: PingFangSC-Semibold, PingFang SC;
              font-weight: 600;
              color: #FFFFFF;
            }
          }
          .uers_logs {
            li {
              display: flex;
              background: #F2F6FF;
              height: 30px;
              span {
                flex: 1;
                text-align: center;
                line-height: 30px;
                font-size: 13px;
                font-family: MicrosoftYaHei;
                color: #333333;
                img {
                  height: 30px;
                  width: 45px;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
