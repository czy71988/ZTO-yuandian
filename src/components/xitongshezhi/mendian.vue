<template>
  <div class="shopList">
    <!-- 头部部分 -->
    <div class="BanNer_top">
      <p><span></span>系统设置  门店管理</p>
      <!-- <div @click="chuangjian">创建Banner</div> -->
      <div class="BanNer_top_p">
        <span>门店名称：</span>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <span>手机号：</span>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <span>所属网点：</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <span>门店状态：</span>
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
    <!-- <button @click="showMapSelector = true">选取地图</button> -->
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
            label="店铺编号">
          </el-table-column>
          <el-table-column
            prop="shop"
            align="center"
            label="门店名称">
          </el-table-column>
          <el-table-column
            prop="phone"
            align="center"
            label="店主姓名"
            width="100">
          </el-table-column>
          <el-table-column
            prop="time"
            align="center"
            label="手机号码"
            width="120">
          </el-table-column>
          <el-table-column
            prop="number"
            align="center"
            width="50"
            label="状态">
          </el-table-column>
          <el-table-column
            prop="out"
            align="center"
            label="门店地址">
          </el-table-column>
          <el-table-column
            prop="weizhi"
            align="center"
            width="90"
            label="门店配送费">
          </el-table-column>
          <el-table-column
            prop="shopH"
            align="center"
            width="100"
            label="经纬度">
          </el-table-column>
          <el-table-column
            prop="time"
            align="center"
            width="100"
            label="创建时间">
          </el-table-column>
          <el-table-column
            prop="shopH"
            align="center"
            width="100"
            label="所属中心">
          </el-table-column>
          <el-table-column
            align="center"
            label="操作"
            width="80">
            <template slot-scope="scope">
              <span class="sdreg" @click="bianji(scope.row)"><i class="el-icon-edit"></i>编辑</span>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>
    <!-- 分页 -->
    <div class="bottom_bottom">
      <span class="bottom_q" @click="news"><i class="el-icon-circle-plus-outline"></i>新增门店</span>
      <span class="bottom_q"><i class="el-icon-download"></i>批量导出</span>
      <span class="bottom_q"><i class="el-icon-upload2"></i>批量导入</span>
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
        <p class="sdsd">{{biaotiname}}</p>
        <div class="chuangjian_dialog">
          <div class="gialog_tu">
            <el-form ref="form" :model="form" label-width="100px">
              <el-form-item label="门店名称：">
                <el-input v-model="form.mendianname"></el-input>
              </el-form-item>
              <el-form-item label="店主姓名：">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="手机号码：">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="门店地址：">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="状态：">
                <el-switch v-model="form.delivery"></el-switch>
              </el-form-item>
              <el-form-item label="经纬度：">
                <el-input v-model="form.name"></el-input>
              </el-form-item>
              <el-form-item label="所属中心：">
                <el-select v-model="form.region" placeholder="请选择所属中心">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select>
              </el-form-item>
              <p class="sdferg">
                <span @click="dialogVisible = false">取消</span>
                <span @click="over">提交</span>
              </p>
            </el-form>
          </div>
        </div>
      </el-dialog>
        <el-dialog
          width="20%"
          :visible.sync="dialogVisible1">
          <p class="dkfber">是否保存你所做的修改？</p>
          <p class="sdferg">
            <span @click="dialogVisible1 = false">取消</span>
            <span @click="tijiao">提交</span>
          </p>
        </el-dialog>
    </div>
    <map-selector v-model="showMapSelector"></map-selector>
  </div>
</template>

<script>
import MapSelector from '../../components/map-selector/MapSelector'
export default {
  components: {
    MapSelector
  },
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
      biaotiname: '',
      currentPage1: 1,
      showMapSelector: false,
      sdbgg: '',

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
  mounted () {
    setTimeout(() => {
      this.showMapSelector = true
    }, 1000)
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
      this.biaotiname = '编辑门店'
      this.dialogVisible = !this.dialogVisible
    },
    // 提交操作
    over () {
      if (this.biaotiname === '编辑门店') {
        this.dialogVisible1 = !this.dialogVisible1
      } else {}
    },
    tijiao () {
      this.dialogVisible1 = !this.dialogVisible1
    },
    // 新增按钮
    news () {
      this.biaotiname = '新增门店'
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
      .bottom_q {
        font-size: 13px;
        font-family: MicrosoftYaHei;
        color: #2B80FD;
        line-height: 17px;
        margin-right: 45px;
        line-height: 40px;
        i {
          margin-right: 10px;
        }
      }
    }
    .mendian_diagio {
      .dkfber {
        font-size: 14px;
        font-family: MicrosoftYaHei;
        color: #333333;
        line-height: 70px;
        text-align: center;
      }
      .sdferg {
        text-align: center;
        margin-bottom: 30px;
        span {
          display: inline-block;
          width: 100px;
          height: 35px;
          border-radius: 18px;
          border: 1px solid #2B80FD;
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: #2B80FD;
          line-height: 35px;
          margin-right: 20px;
        }
        span:last-child {
          color: #FFFFFF;
          background: #2B80FD;
          margin-right: 0px;
        }
      }
      .chuangjian_dialog {
        line-height: 0;
        text-align: left;
        padding: 20px;
        box-sizing: border-box;
        .gialog_tu {
          .sdferg {
            text-align: center;
            span {
              display: inline-block;
              width: 100px;
              height: 35px;
              border-radius: 18px;
              border: 1px solid #2B80FD;
              font-size: 14px;
              font-family: MicrosoftYaHei;
              color: #2B80FD;
              line-height: 35px;
              margin-right: 20px;
            }
            span:last-child {
              color: #FFFFFF;
              background: #2B80FD;
              margin-right: 0px;
            }
          }
        }
      }
    }
  }
</style>
