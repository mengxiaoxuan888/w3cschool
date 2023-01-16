<template>
  <div class="applist">
    <!-- 首页头部 -->
    <MyHeader />

    <!-- nav 导航栏-->
    <MyNav />

    <!-- main 菜单栏 MenuType-->
    <MenuType />

    <!-- w3c头条 内容区域 IndexContainer-->
    <div class="index-container">
      <MyHeadlines />
    </div>

    <!-- 内容区域 IndexContainer-->
    <IndexContainer />

    <!-- 底部抽屉 -->
    <div class="widget-body" data-type="index"></div>

    <!-- 底部 -->
    <!-- footer start  底部区域 MyFooter-->
    <MyFooter />

    <!-- ToolBar 侧边工具栏：判断完页面是否植入美洽后再显示，防止闪烁 -->
    <ToolBar />
  </div>
</template>

<script>
import MyHeader from "./MyHeader";
import MyNav from "./MyNav";
import MenuType from "./MenuType";
import MyHeadlines from "./IndexContainer/MyHeadlines";
import IndexContainer from "./IndexContainer";
import MyFooter from "./MyFooter";
import ToolBar from "./ToolBar";

export default {
  name: "AppList",
  data() {
    return {};
  },
  components: {
    MyHeader,
    MyNav,
    MenuType,
    MyHeadlines,
    IndexContainer,
    MyFooter,
    ToolBar,
  },
};
</script>

<!-- 样式，加入scoped则该样式只对该组件生效 -->
<style>
</style>
