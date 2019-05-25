<template>
  <div class="header-section">
    <div class="header-hd">
      <slot name="header-hd"
        >感谢您花时间阅读我的简历，期待能有机会和您共事。🙇🏻‍♀️🙇🏻‍♀️🙇🏻‍♀️</slot
      >
    </div>
    <div class="header-bd">
      <slot name="header-bd"></slot>
    </div>
    <div class="header-ft">
      <slot name="header-ft"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style lang="less" scoped>
.header-section {
  position: relative;
  height: 100%;
  display: flex;
  .header-bd {
    flex: 1;
  }
}

.header-hd,
.header-bd,
.header-ft {
  display: flex;
  align-items: center;
}

.header-hd {
  .collapse-icon {
    font-size: 22px;
    cursor: pointer;
  }
}

.bar-info-container {
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 10px;
  transition: all 0.2s ease;
  cursor: pointer;
  &:hover {
    background-color: rgb(235, 248, 238);
  }
  .userInfo-name {
    font-size: 14px;
    vertical-align: middle;
  }
  .userInfo-avatar {
    display: inline-block;
    width: 20px;
    height: 20px;
    line-height: 20px;
    text-align: center;
    background-color: #ccc;
    border-radius: 50%;
    outline: none;
    margin: 0 10px;
  }
}
</style>
