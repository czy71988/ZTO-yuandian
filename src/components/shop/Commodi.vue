<template>
  <div class="shopType">
    <!-- 商品类目创建头部 -->
    <div class="shopType_top">
      <span>· 商品管理</span>
      <span>商品列表</span>
    </div>
    <div class="top">
      <span>选择中心仓</span>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <span>选择网点</span>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <span>选择门店</span>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>

      <span>搜索</span>
    </div>
    <!-- 表格部分 -->
    <div class="shopType_content">
      <template>
        <el-table
          :data="list"
          stripe
          style="width: 100%">
          <el-table-column
            prop="name"
            align="center"
            label="商品ID">
          </el-table-column>
          <el-table-column
            prop="id"
            align="center"
            label="商品编号">
          </el-table-column>
          <el-table-column
            align="center"
            label="主图">
            <template slot-scope="scope">
            <!-- <template> -->
              <img class="sdfsgerg" :src="scope.row.imageUrl" alt="">
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="详情图">
            <template slot-scope="scope">
              <span>{{scope.row.gmtCreate | outtiame}}</span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="商品标题">
            <template slot-scope="scope">
              <span>{{scope.row.gmtCreate | outtiame}}</span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="所属类目">
            <template slot-scope="scope">
              <span>{{scope.row.gmtCreate | outtiame}}</span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="销售价">
            <template slot-scope="scope">
              <span>{{scope.row.gmtCreate | outtiame}}</span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="门店库存">
            <template slot-scope="scope">
              <span>{{scope.row.gmtCreate | outtiame}}</span>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="操作"
            width="100">
            <template slot-scope="scope">
              <span class="shopType_span1" @click="bianji(scope.row)"><i class="el-icon-edit"></i>编辑</span>
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
          :total="total">
        </el-pagination>
      </div>
    </div>
    <!-- dialog弹窗 -->

    <!-- 弹窗部分 -- 商品创建编辑 -->
    <div class="shopType_diagio">
      <el-dialog
        :visible.sync="shopShow">
        <p class="sdsd">库存编辑</p>
        <div class="chuangjian_shop_dialog">
          <el-form ref="form" :model="form" label-width="100px">
            <el-form-item label="商品编号：">
              <el-input :disabled="true" v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="商品主图：">
              <ul>
                <li><img src="../../assets/编组 3@2x.png" alt=""></li>
              </ul>
            </el-form-item>
            <el-form-item label="详情图：">
              <ul>
                <li><img src="../../assets/编组 3@2x.png" alt=""></li>
                <li><img src="../../assets/编组 3@2x.png" alt=""></li>
                <li><img src="../../assets/编组 3@2x.png" alt=""></li>
                <li><img src="../../assets/编组 3@2x.png" alt=""></li>
              </ul>
            </el-form-item>
            <el-form-item label="商品标题：">
              <el-input :disabled="true" v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="商品标签：">
              <el-select disabled v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="所在仓位置：">
              <el-select disabled v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="所属类目：">
              <el-select disabled v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="销售价：">
              <el-input :disabled="true" v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="库存数量：">
              <el-input v-model="form.name"></el-input>
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
import { } from '../../api/shop'
export default {
  data () {
    return {
      form: {
        name: '',
        imageUrl: ''
      },
      currentPage1: 1,
      shopShow: false,
      sdbgg: '',
      page: '1',
      size: '10',
      total: 0,
      list: [],
      imageUrl: ''
    }
  },
  mounted () {
    this.getlist()
  },
  methods: {
    // 获取列表
    getlist () {
    },

    // 分页
    handleSizeChange (val) {
      this.size = val
      this.getlist()
    },

    handleCurrentChange (val) {
      this.page = val
      this.getlist()
    },

    // 编辑按钮
    bianji (row) {
      this.shopShow = !this.shopShow
      this.sdbgg = '确定'
      this.form = row
      this.imageUrl = this.form.imageUrl
    },

    // 确定添加商品或是编辑商品
    chuangjianOver () {
    },

    // 图像上传
    handleAvatarSuccess (res, file) {
      this.form.imageUrl = res.data
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
    }
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
          .el-form-item__content {
            .el-input {
              width: 200px;
            }
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
        color: #2B80FD;
        line-height: 17px;
      }
      .shopType_span22 {
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
  .top {
    span {
      margin: 0 20px 20px 50px;
    }
    span:last-child {
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
  }
  .chuangjian_shop_dialog {
    ul {
      list-style: none;
      li {
        display: inline-block;
        width: 50px;
        height: 50px;
        margin: 5px;
        img {
          width: 50px;
          height: 50px;
        }
      }
    }
  }
</style>
