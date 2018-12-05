需要在iconfont.css中添加如下样式：
[class^="el-icon-tm"], [class*=" el-icon-tm"] {
  font-family:"iconfont" !important;
  /* 以下内容参照第三方图标库本身的规则 */
  font-size: 16px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
使用方式：
<i class="el-icon-tm-类名"></il>
或者element ui 的方式：   <el-input icon="el-icon-tm-类名"></el-input>
