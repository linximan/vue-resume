<template>
  <el-aside class="page-sider">
    <div class="user-info">
      <div class="user-avatar">
        <img class="user-avatar-png" src="@/assets/logo.png" />
      </div>
      <p class="user-name">林熙</p>
      <p class="user-status">Born to Code</p>
    </div>
    <div class="user-info">
      <div class="user-info-title">个人信息</div>
      <div class="user-info-text">
        <i class="el-icon-trophy"></i>
        <span>毕业学校：惠州学院（本科）</span>
      </div>
      <div class="user-info-text">
        <i class="el-icon-present"></i>
        <span>出生年月：1990.07.14（广州）</span>
      </div>
      <div class="user-info-text">
        <i class="el-icon-position"></i>
        <span>意向城市：广州、深圳</span>
      </div>
      <div class="user-info-text">
        <i class="el-icon-mobile-phone"></i>
        <span>联系方式：13511111111</span>
      </div>
      <div class="user-info-text">
        <i class="el-icon-wind-power"></i>
        <span>应聘职位：前端研发工程师</span>
      </div>
      <div class="user-info-text">
        <i class="el-icon-bank-card"></i>
        <span>期望月薪：8～10k</span>
      </div>
    </div>
    <div class="user-info">
      <div class="user-info-title">实习经历</div>
      <div class="user-info-text">
        <i class="el-icon-office-building"></i>
        <span>2019 极客学院 - 前端助教</span>
      </div>
      <div class="user-info-text">
        <i class="el-icon-office-building"></i>
        <span>2018 扎克斯科技 - 前端实习</span>
      </div>
    </div>
  </el-aside>
</template>

<script>
export default {
  props: {},
  components: {}
};
</script>

<style type="text/css" lang="less">
.page-sider {
  position: relative;
  box-shadow: 2px 0 8px 0 rgba(29, 35, 41, 0.05);
  transition: all 0.2s ease;
  width: 240px;
  color: #fff;
  padding: 40px;
  padding-top: 20px;
  .user-info {
    margin: 40px 0;
    .user-info-title {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 8px;
    }
    .user-info-text {
      font-size: 14px;
      line-height: 2;
      i {
        margin-right: 8px;
        vertical-align: middle;
      }
      span {
        vertical-align: middle;
      }
    }
  }
  .user-avatar {
    .user-avatar-png {
      display: block;
      width: 110px;
      height: 110px;
      margin: 0 auto 20px;
      box-shadow: 2px 0 8px 0 rgba(29, 35, 41, 0.05);
      border-radius: 50%;
      background-color: #fff;
    }
  }
  .user-name {
    font-size: 24px;
    font-weight: 500;
    text-align: center;
  }
  .user-status {
    margin-top: 8px;
    font-size: 16px;
    font-weight: 400;
    text-align: center;
  }
}
</style>
