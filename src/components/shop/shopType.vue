<template>
  <div class="shopType">
    <!-- 商品类目创建头部 -->
    <div class="shopType_top">
      <span></span>
      <span>商品管理</span>
      <span>商品类目创建</span>
    </div>
    <!-- 表格部分 -->
    <div class="shopType_content">
      <template>
        <el-table
          :data="tableData"
          stripe
          style="width: 100%"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="55"
            label="选择">
          </el-table-column>
          <el-table-column
            prop="name"
            align="center"
            label="类目名称">
          </el-table-column>
          <el-table-column
            prop="id"
            align="center"
            label="类目ID">
          </el-table-column>
          <el-table-column
            align="center"
            label="类目图标">
            <template slot-scope="scope">
            <!-- <template> -->
              <img class="sdfsgerg" :src="scope.row.icon" alt="">
            </template>
          </el-table-column>
          <el-table-column
            prop="time"
            align="center"
            label="添加日期">
          </el-table-column>
          <el-table-column
            align="center"
            label="操作"
            width="300">
            <template slot-scope="scope">
              <span class="shopType_span1" @click="bianji(scope.row)"><i class="el-icon-edit"></i>编辑</span>
              <span class="shopType_span2" @click="xiajia(scope.row)"><i class="el-icon-sort"></i>下架</span>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>
    <!-- 分页 -->
    <div class="bottom_bottom">
      <div @click="shujudaochu" class="bottom_chuangjian"><i class="el-icon-circle-plus-outline"></i>导出数据</div>
      <div @click="chuanjianshagpin" class="bottom_chuangjian"><i class="el-icon-circle-plus-outline"></i>添加商品</div>
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
    <!-- dialog弹窗 -->

    <!-- 弹窗部分 -- 商品创建编辑 -->
    <div class="shopType_diagio">
      <el-dialog
        :visible.sync="shopShow">
        <p class="sdsd">{{biaotiname}}</p>
        <div class="chuangjian_shop_dialog">
          <el-form ref="form" :model="form" label-width="100px">
            <el-form-item label="类目名称：">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="类目图标：">
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-circle-plus-outline avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <div class="chuangjian_dialog">
              <span @click="shopShow = !shopShow">取消</span>
              <span @click="chuangjianOver">{{sdbgg}}</span>
            </div>
          </el-form>
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
        { name: '香菇', id: '789456123', icon: '', time: '2020/05/6/14:00' },
        { name: '香菇', id: '789456123', icon: '', time: '2020/05/6/14:00' },
        { name: '香菇', id: '789456123', icon: '', time: '2020/05/6/14:00' },
        { name: '香菇', id: '789456123', icon: '', time: '2020/05/6/14:00' },
        { name: '香菇', id: '789456123', icon: '', time: '2020/05/6/14:00' },
        { name: '香菇', id: '789456123', icon: '', time: '2020/05/6/14:00' },
        { name: '香菇', id: '789456123', icon: '', time: '2020/05/6/14:00' }
      ],
      form: {
        name: '',
        icon: ''
      },
      shopShow: false,
      biaotiname: '',
      sdbgg: ''
    }
  },
  methods: {
    // 表格选择框
    handleSelectionChange (val) {
      this.multipleSelection = val
    },
    // 分页
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    },
    // 编辑按钮
    bianji (row) {
      this.shopShow = !this.shopShow
      this.biaotiname = '类目编辑'
      this.sdbgg = '确定'
    },
    // 添加商品按钮
    chuanjianshagpin () {
      this.shopShow = !this.shopShow
      this.biaotiname = '类目创建'
      this.sdbgg = '添加'
    },
    // 确定添加商品或是编辑商品
    chuangjianOver () {},
    // 下架按纽
    xiajia () {},
    // 导出按钮
    shujudaochu () {}
  }
}
</script>

<style lang="less">
  .shopType {
    .shopType_content {
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
    .shopType_diagio {
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
        }
      }
      .chuangjian_shop_dialog {
        .el-form {
          padding: 30px 30px;
          box-sizing: border-box;
          .el-form-item {
            height: 100%;
            .el-form-item__content {
              height: 100%;
            }
          }
          .sdhfhogerg {
            width: 60px;
            font-size: 12px;
            font-family: MicrosoftYaHei;
            color: #999999;
            line-height: 16px;
            position: absolute;
            top: 70px;
            left: 0;
          }
          .el-form-item__content {
            .el-input {
              width: 200px;
            }
          }
            .avatar-uploader {
              width: 60px;
              height: 60px;
              .el-upload {
                border: 1px dashed #d9d9d9;
                border-radius: 6px;
                cursor: pointer;
                position: relative;
                overflow: hidden;
              }
            }
            .avatar-uploader .el-upload:hover {
              border-color: #409EFF;
            }
            .avatar-uploader-icon {
              font-size: 28px;
              color: #8c939d;
              width: 60px;
              height: 60px;
              line-height: 60px;
              i {
                margin-top: 30px;
              }
            }

            .el-upload--picture-card {
              line-height: 0;
            }
            .avatar {
              width: 60px;
              height: 60px;
              display: block;
            }
        }
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
            text-align: left;
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
      .el-button {

      }
    }
  }
</style>

<style lang="less" scoped>
  .shopType {
    padding: 0 15px;
    box-sizing: border-box;
    .shopType_top {
      line-height: 92px;
      span {
        font-size: 18px;
        font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
        font-weight: bold;
        color: #2B80FD;
      }
      span:first-child {
        display: inline-block;
        width: 7px;
        height: 7px;
        border-radius: 4px;
        background: #2B80FD;
        margin-right: 10px;
        margin-left: 20px;
      }
      span:last-child {
        font-size: 18px;
        font-family: MicrosoftYaHei;
        color: #2B80FD;
        font-weight: 400;
        margin-left: 30px;
      }
    }
    .shopType_content {
      .sdfsgerg {
        width: 30px;
        height: 30px;
      }
      .shopType_span1 {
        font-size: 13px;
        font-family: MicrosoftYaHei;
        color: #2B80FD;
        line-height: 17px;
        margin-right: 30px;
      }
      .shopType_span2 {
        font-size: 13px;
        font-family: MicrosoftYaHei;
        color: #FF8C14;
        line-height: 17px;
      }
    }
    .bottom_bottom {
      height: 40px;
      padding: 0 50px;
      background: #D7E5FB;
      border-radius: 0px 0px 6px 6px;
      box-sizing: border-box;
      .bottom_chuangjian {
        display: inline-block;
        font-size: 13px;
        font-family: MicrosoftYaHei;
        color: #2B80FD;
        line-height: 17px;
        float: left;
        margin-right: 20px;
        line-height: 40px;
        i {
          margin-right: 10px;
        }
      }
      .block {
        display: inline-block;
        float: right;
      }
    }
    .shopType_diagio {
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
