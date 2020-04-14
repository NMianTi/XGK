<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
.el-header, .el-footer {
  height: auto;
  background-color: #545c64;
  color: #333;
  /* text-align: center; */
  /* line-height: 60px; */
}

.el-aside {
  background-color: rgb(236, 236, 236);
  color: #333;
  /* text-align: center; */
  /* line-height: 200px; */
}

.el-main {
  background-color: rgb(250, 250, 250);
  color: #333;
  /* text-align: center; */
  /* line-height: 160px; */
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  /* line-height: 260px; */
}

.el-container:nth-child(7) .el-aside {
  /* line-height: 320px; */
}

/* 通用属性 */
.block-left {
    float: left;
}
.block-right {
    float: right;
}
/* 内容锁定大小 且居中 */
.content-wrap {
    max-width: 120rem;
    min-width: 100rem;
    margin: 0 auto;
}
/* 清除浮动 */
.clearfix:before, .clearfix:after  {
    content: "";
    display: table;
}
.clearfix:after {
    clear: both;
}
.clearfix {
    *zoom: 1;
}
</style>
