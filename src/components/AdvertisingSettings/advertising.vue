<template>
  <div class="BanNer">
    <!-- 头部部分 -->
    <div class="BanNer_top">
      <p>· 广告位配置  <span class="dkfbgirgasd">类目ICON配置</span></p>
      <div @click="chuangjian">创建新类目</div>
    </div>
    <!-- 内容部分 -->
    <div class="BanNer_content">
      <template>
        <el-table
          :data="tableData"
          stripe
          style="width: 100%">
          <el-table-column
            prop="date"
            align="center"
            label="类目名称">
          </el-table-column>
          <el-table-column
            prop="time"
            align="center"
            label="创建时间">
          </el-table-column>
          <el-table-column
            prop="address"
            align="center"
            label="顺序">
          </el-table-column>
          <el-table-column
            prop="URL"
            align="center"
            label="图片URL">
          </el-table-column>
          <el-table-column
            prop="addressds"
            align="center"
            label="跳转方式">
          </el-table-column>
          <el-table-column
            prop="addressgh"
            align="center"
            label="落地页">
          </el-table-column>
          <el-table-column
            align="center"
            label="操作">
            <template slot-scope="scope">
              <span class="Banner_span1" @click="bianji(scope.row)"><i class="el-icon-edit"></i>编辑</span>
              <span class="Banner_span2" @click="xiajia(scope.row)"><i class="el-icon-delete"></i>下架</span>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>
    <!-- 弹窗部分 -->
    <div class="BanNer_diagio">
      <el-dialog
        :visible.sync="dialogVisible">
        <p>{{biaotiname}}</p>
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="标题：">
            <el-input v-model="form.date"></el-input>
          </el-form-item>
          <el-form-item label="排序：">
            <el-input v-model="form.address"></el-input>
          </el-form-item>
          <el-form-item label="跳转方式：">
            <el-input v-model="form.addressds"></el-input>
          </el-form-item>
          <el-form-item label="图片URL：">
            <el-input v-model="form.URL"></el-input>
          </el-form-item>
          <el-form-item label="落地页URL：">
            <el-input v-model="form.addressgh"></el-input>
          </el-form-item>
        </el-form>
        <div class="chuangjian_dialog">
          <span @click="dialogVisible = !dialogVisible">取消</span>
          <span @click="chuangjianOver">{{Btnname}}</span>
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
        { date: '香菇', time: '2020-01-02', address: '1', URL: 'dfssgdhjhjkgk.jpg', addressds: '外链跳转', addressgh: 'dfgwtgeg' },
        { date: '香菇', time: '2020-01-02', address: '1', URL: 'dfssgdhjhjkgk.jpg', addressds: '外链跳转', addressgh: 'dfgwtgeg' },
        { date: '香菇', time: '2020-01-02', address: '1', URL: 'dfssgdhjhjkgk.jpg', addressds: '外链跳转', addressgh: 'dfgwtgeg' },
        { date: '香菇', time: '2020-01-02', address: '1', URL: 'dfssgdhjhjkgk.jpg', addressds: '外链跳转', addressgh: 'dfgwtgeg' },
        { date: '香菇', time: '2020-01-02', address: '1', URL: 'dfssgdhjhjkgk.jpg', addressds: '外链跳转', addressgh: 'dfgwtgeg' },
        { date: '香菇', time: '2020-01-02', address: '1', URL: 'dfssgdhjhjkgk.jpg', addressds: '外链跳转', addressgh: 'dfgwtgeg' },
        { date: '香菇', time: '2020-01-02', address: '1', URL: 'dfssgdhjhjkgk.jpg', addressds: '外链跳转', addressgh: 'dfgwtgeg' }
      ],
      dialogVisible: false,
      form: {
        date: '',
        address: '',
        addressds: '',
        URL: '',
        addressgh: ''
      },
      biaotiname: '',
      Btnname: ''
    }
  },
  mounted: {
  },
  methods: {
    xiajia (id) {
      console.log(id)
    },
    // 创建按钮
    chuangjian () {
      this.form = {}
      this.dialogVisible = !this.dialogVisible
      this.biaotiname = '类目创建'
      this.Btnname = '创建'
    },
    // 创建完成操作
    chuangjianOver () {
      this.dialogVisible = !this.dialogVisible
    },
    // 编辑按钮
    bianji (row) {
      console.log(row)
      this.form = row
      this.dialogVisible = !this.dialogVisible
      this.biaotiname = '类目编辑'
      this.Btnname = '确定'
    }
  }
}
</script>

<style lang="less">
  .BanNer {
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
    }
    .BanNer_diagio {
      .el-dialog {
        width: 500px;
        height: 430px;
        background: #FFFFFF;
        border-radius: 8px;
        .el-dialog__header {
          display: none;
        }
        .el-dialog__body {
          padding: 0;
          height: 100%;
          p {
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
            padding: 30px 75px;
            box-sizing: border-box;
            .el-form-item {
              margin-bottom: 20px;
              height: 30px;
              line-height: 30px;
              .el-form-item__label {
                line-height: 30px;
              }
              .el-form-item__content {
                height: 30px;
                line-height: 30px;
                .el-input__inner {
                  line-height: 30px;
                  height: 30px;
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
  .BanNer {
    padding: 0 15px;
    box-sizing: border-box;
    // ---------------------------
    .BanNer_top {
      position: relative;
      height: 90px;
      p {
        text-align: left;
        line-height: 90px;
        font-size: 18px;
        font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
        font-weight: bold;
        color: #2B80FD;
        .dkfbgirgasd {
          font-size: 18px;
          font-family: MicrosoftYaHei;
          color: #2B80FD;
          margin-left: 32px;
          font-weight: 400;
        }
      }
      div {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 114px;
        height: 30px;
        background: #FF8C14;
        border-radius: 15px;
        font-size: 12px;
        font-family: MicrosoftYaHei;
        color: #FFFFFF;
        line-height: 30px;
        text-align: center;
      }
    }
    // -----------------------------
    .BanNer_content {
      margin-top: 10px;
      .Banner_span1 {
        color: #2B80FD;
        margin-right: 30px;
        font-size: 13px;
      }
      .Banner_span2 {
        color: #FF8C14;
        font-size: 13px;
      }
    }
    .BanNer_diagio {
      .chuangjian_dialog {
        line-height: 0;
        text-align: center;
        span {
          display: inline-block;
          width: 100px;
          height: 35px;
          border-radius: 18px;
          border: 1px solid #2B80FD;
          line-height: 35px;
          color: #2B80FD;
          font-size: 14px;
          font-family: MicrosoftYaHei;
        }
        span:last-child {
          margin-left: 40px;
          background: #2B80FD;
          color: #FFFFFF;
        }
      }
    }
  }
</style>
