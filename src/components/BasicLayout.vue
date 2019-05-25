<template>
  <el-container class="h100">
    <Sider />
    <el-container>
      <el-header class="page-header" height="64px">
        <Header></Header>
      </el-header>
      <el-main class="page-mainer">
        <router-view></router-view>
      </el-main>
      <Footer />
    </el-container>
  </el-container>
</template>

<script>
import Header from "./BasicLayoutHeader.vue";
import Footer from "./BasicLayoutFooter.vue";
import Sider from "./BasicLayoutSider.vue";

export default {
  data() {
    return {};
  },
  components: {
    Header,
    Footer,
    Sider
  }
};
</script>

<style type="text/css" lang="less">
.h100 {
  height: 100vh;
  // background-color: #f0f2f5;
}

.page-header {
  background-color: #fff;
  box-shadow: 0 2px 8px #f0f1f2;
  position: relative;
  z-index: 10;
  height: 64px;

  .page-header-title {
    font-size: 20px;
  }
}

.page-sider {
  position: relative;
  background-color: #5770ff;
  box-shadow: 2px 0 8px 0 rgba(29, 35, 41, 0.05);
  .el-menu {
    border-right: none;
  }
}

.page-mainer {
  padding: 0;
}
</style>
