<template>
  <div class="demo-section">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ name: 'Home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>CRM 销售信息管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="carousel-container">
      <h3 class="sub-title">预览</h3>
      <el-carousel :interval="4000" height="320px">
        <el-carousel-item v-for="item in 6" :key="item">
          <h3 class="medium">{{ item }}</h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="tips-container">
      <h3 class="sub-title">技术要点</h3>
      <ul class="tips-list">
        <li>1.XXX</li>
        <li>2.XXX</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style type="text/css" lang="less" scoped>
.demo-section {
  padding: 20px;
}
.sub-title {
  font-size: 18px;
  margin: 16px 0;
}

.carousel-container {
  padding: 20px;
  // width: 640px;

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
}

.tips-container {
  padding: 20px;
  .tips-list {
    list-style: none;
    line-height: 2;
    font-size: 14px;
  }
}
</style>
