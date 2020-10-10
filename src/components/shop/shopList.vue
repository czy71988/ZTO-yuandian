<template>
  <div class="shopList">
    <!-- 头部部分 -->
    <div class="BanNer_top">
      <p><span></span>商品管理  商品列表</p>
      <!-- <div @click="chuangjian">创建Banner</div> -->
      <div class="BanNer_top_p">
        <span>商品编号：</span>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <span>商品标题：</span>
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <span>商品标签：</span>
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
            prop="date"
            align="center"
            label="商品ID">
          </el-table-column>
          <el-table-column
            prop="time"
            align="center"
            label="商品编号">
          </el-table-column>
          <el-table-column
            align="center"
            label="主图">
            <template slot-scope="scope">
            <!-- <template> -->
              <img class="sdfsgerg" :src="scope.row.address" alt="">
            </template>
          </el-table-column>
          <el-table-column
            prop="addressds"
            align="center"
            label="商品标题">
          </el-table-column>
          <el-table-column
            prop="addressgh"
            align="center"
            label="商品标签">
          </el-table-column>
          <el-table-column
            prop="addressgh"
            align="center"
            label="所在仓位置">
          </el-table-column>
          <el-table-column
            prop="addressgh"
            align="center"
            label="销售价">
          </el-table-column>
          <el-table-column
            align="center"
            label="操作"
            width="300">
            <template slot-scope="scope">
              <span class="Banner_span1" @click="bianji(scope.row)"><i class="el-icon-edit"></i>编辑</span>
              <span class="Banner_span3" @click="chakanxiangqing(scope.row)"><i class="el-icon-zoom-in"></i>查看详情</span>
              <span class="Banner_span2" @click="xiajia(scope.row)"><i class="el-icon-sort"></i>下架</span>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>
    <!-- 分页 -->
    <div class="bottom_bottom">
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
    <!-- 弹窗部分 -- 查看详情 -->
    <div class="BanNer_diagio">
      <el-dialog
        :visible.sync="dialogVisible">
        <p class="sdsd">{{biaotiname}}</p>
        <div class="chuangjian_dialog">
          <div class="gialog_tu">
            <span>主图：</span>
            <ul>
              <li>
                <img src="https://oss.zk0531.cn/banner/61a68af4-49c6-4df2-9f49-142dbb3c922f.jpg" alt="">
              </li>
              <li>
                <img src="https://oss.zk0531.cn/banner/61a68af4-49c6-4df2-9f49-142dbb3c922f.jpg" alt="">
              </li>
              <li>
                <img src="https://oss.zk0531.cn/banner/61a68af4-49c6-4df2-9f49-142dbb3c922f.jpg" alt="">
              </li>
              <li>
                <img src="https://oss.zk0531.cn/banner/61a68af4-49c6-4df2-9f49-142dbb3c922f.jpg" alt="">
              </li>
              <li>
                <img src="https://oss.zk0531.cn/banner/61a68af4-49c6-4df2-9f49-142dbb3c922f.jpg" alt="">
              </li>
              <li>
                <img src="https://oss.zk0531.cn/banner/61a68af4-49c6-4df2-9f49-142dbb3c922f.jpg" alt="">
              </li>
            </ul>
            <span>详情图：</span>
            <ul>
              <li>
                <img src="https://oss.zk0531.cn/banner/61a68af4-49c6-4df2-9f49-142dbb3c922f.jpg" alt="">
              </li>
              <li>
                <img src="https://oss.zk0531.cn/banner/61a68af4-49c6-4df2-9f49-142dbb3c922f.jpg" alt="">
              </li>
              <li>
                <img src="https://oss.zk0531.cn/banner/61a68af4-49c6-4df2-9f49-142dbb3c922f.jpg" alt="">
              </li>
              <li>
                <img src="https://oss.zk0531.cn/banner/61a68af4-49c6-4df2-9f49-142dbb3c922f.jpg" alt="">
              </li>
              <li>
                <img src="https://oss.zk0531.cn/banner/61a68af4-49c6-4df2-9f49-142dbb3c922f.jpg" alt="">
              </li>
              <li>
                <img src="https://oss.zk0531.cn/banner/61a68af4-49c6-4df2-9f49-142dbb3c922f.jpg" alt="">
              </li>
            </ul>
            <p>
              <span>销售价：<i>30</i></span>
            </p>
            <p>
              <span>库存数量：<i>30</i></span>
            </p>
          </div>
          <div class="gialog_XX"></div>
        </div>
      </el-dialog>
    </div>
    <!-- 弹窗部分 -- 商品创建编辑 -->
    <div class="BanNer_diagio">
      <el-dialog
        :visible.sync="shopShow">
        <p class="sdsd">{{biaotiname}}</p>
        <div class="chuangjian_shop_dialog">
          <el-form ref="form" :model="form" label-width="100px">
            <el-form-item label="商品编号：">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="商品标题：">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="商品主图：">
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <div v-else class="avatar-uploader-icon">
                  <i class="el-icon-circle-plus-outline"></i><span class="sdhfhogerg" v-if="!imageUrl">点击或将图片拖拽到这里上传支持扩展名：png、jpg、jpeg</span>
                </div>
              </el-upload>
            </el-form-item>
            <el-form-item label="详情图：">
              <el-upload
                action="https://jsonplaceholder.typicode.com/posts/"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :on-remove="handleRemove">
                <div class="avatar-uploader-icon">
                  <i class="el-icon-circle-plus-outline"></i><span class="sdhfhogerg">点击或将图片拖拽到这里上传支持扩展名：png、jpg、jpeg</span>
                </div>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
              </el-dialog>
            </el-form-item>
            <el-form-item label="商品标签：">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="所在仓位置：">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="所属类目：">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="销售价：">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <!-- <el-form-item label="会员价：">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="门店分佣：">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="网点分佣：">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="中心分佣：">
              <el-input v-model="form.name"></el-input>
            </el-form-item> -->
            <el-form-item label="库存数量：">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <!-- <el-form-item label="单位：">
              <el-input v-model="form.name"></el-input>
            </el-form-item> -->
            <el-form-item>
              <el-button type="primary" @click="onSubmit">{{sdbgg}}</el-button>
              <el-button>取消</el-button>
            </el-form-item>
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
        { date: '香菇', time: '2020-01-02', address: 'https://oss.zk0531.cn/banner/61a68af4-49c6-4df2-9f49-142dbb3c922f.jpg', URL: 'dfssgdhjhjkgk.jpg', addressds: '外链跳转', addressgh: 'dfgwtgeg' },
        { date: '香菇', time: '2020-01-02', address: 'https://oss.zk0531.cn/banner/61a68af4-49c6-4df2-9f49-142dbb3c922f.jpg', URL: 'dfssgdhjhjkgk.jpg', addressds: '外链跳转', addressgh: 'dfgwtgeg' },
        { date: '香菇', time: '2020-01-02', address: 'https://oss.zk0531.cn/banner/61a68af4-49c6-4df2-9f49-142dbb3c922f.jpg', URL: 'dfssgdhjhjkgk.jpg', addressds: '外链跳转', addressgh: 'dfgwtgeg' },
        { date: '香菇', time: '2020-01-02', address: 'https://oss.zk0531.cn/banner/61a68af4-49c6-4df2-9f49-142dbb3c922f.jpg', URL: 'dfssgdhjhjkgk.jpg', addressds: '外链跳转', addressgh: 'dfgwtgeg' },
        { date: '香菇', time: '2020-01-02', address: 'https://oss.zk0531.cn/banner/61a68af4-49c6-4df2-9f49-142dbb3c922f.jpg', URL: 'dfssgdhjhjkgk.jpg', addressds: '外链跳转', addressgh: 'dfgwtgeg' },
        { date: '香菇', time: '2020-01-02', address: 'https://oss.zk0531.cn/banner/61a68af4-49c6-4df2-9f49-142dbb3c922f.jpg', URL: 'dfssgdhjhjkgk.jpg', addressds: '外链跳转', addressgh: 'dfgwtgeg' },
        { date: '香菇', time: '2020-01-02', address: 'https://oss.zk0531.cn/banner/61a68af4-49c6-4df2-9f49-142dbb3c922f.jpg', URL: 'dfssgdhjhjkgk.jpg', addressds: '外链跳转', addressgh: 'dfgwtgeg' },
        { date: '香菇', time: '2020-01-02', address: 'https://oss.zk0531.cn/banner/61a68af4-49c6-4df2-9f49-142dbb3c922f.jpg', URL: 'dfssgdhjhjkgk.jpg', addressds: '外链跳转', addressgh: 'dfgwtgeg' },
        { date: '香菇', time: '2020-01-02', address: 'https://oss.zk0531.cn/banner/61a68af4-49c6-4df2-9f49-142dbb3c922f.jpg', URL: 'dfssgdhjhjkgk.jpg', addressds: '外链跳转', addressgh: 'dfgwtgeg' },
        { date: '香菇', time: '2020-01-02', address: 'https://oss.zk0531.cn/banner/61a68af4-49c6-4df2-9f49-142dbb3c922f.jpg', URL: 'dfssgdhjhjkgk.jpg', addressds: '外链跳转', addressgh: 'dfgwtgeg' }
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
      }
    }
  },
  mounted: {
  },
  methods: {
    // 查看详情
    chakanxiangqing (row) {
      this.biaotiname = '详情'
      this.dialogVisible = !this.dialogVisible
    },
    // 添加商品
    chuanjianshagpin () {
      this.shopShow = !this.shopShow
      this.biaotiname = '创建商品'
      this.sdbgg = '添加'
      console.log('添加商品')
    },
    // 商品编辑
    bianji () {
      this.shopShow = !this.shopShow
      this.biaotiname = '商品编辑'
      this.sdbgg = '确定'
    },
    // 分页
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    },
    // 添加按钮
    onSubmit () {
      console.log('submit!')
    },
    // 图片上传
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
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
    .BanNer_diagio {
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
                width: 150px;
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
                  width: 150px;
                  height: 150px;
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
                  width: 150px;
                  height: 150px;
                  i {
                    margin-top: 30px;
                  }
                }

                .el-upload--picture-card {
                  line-height: 0;
                }
                .avatar {
                  width: 150px;
                  height: 150px;
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
      .Banner_span1 {
        color: #2B80FD;
        margin-right: 30px;
        font-size: 13px;
      }
      .Banner_span2 {
        color: #FF8C14;
        font-size: 13px;
      }
      .Banner_span3 {
        color: #2B80FD;
        margin-right: 30px;
        font-size: 13px;
      }
      .sdfsgerg {
        width: 70px;
        height: 40px;
      }
    }
    .BanNer_diagio {
      .chuangjian_dialog {
        line-height: 0;
        text-align: left;
        padding: 20px;
        box-sizing: border-box;
        .gialog_tu {
          ul {
            margin: auto;
            li {
              display: inline-block;
              margin-right: 25px;
              margin-bottom: 25px;
              img {
                width: 126px;
                height: 78px;
              }
            }
          }
          p {
            line-height: 40px;
            span {
              font-size: 13px;
              font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
              font-weight: bold;
              color: #333333;
              line-height: 17px;
              i {
                color: #666666;
              }
            }
          }
          span {
            line-height: 40px;
            display: inline-block;
            width: 33.3%;
            font-size: 13px;
            font-family: MicrosoftYaHei-Bold, MicrosoftYaHei;
            font-weight: bold;
            color: #333333;
          }
        }
        .chuangjian_shop_dialog {
        }
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
  }
</style>
