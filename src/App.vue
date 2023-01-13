<template>
  <div id="app">
    <!-- 首页头部 -->
    <MyHeader />

    <!-- nav 导航栏-->
    <MyNav/>

    <!-- main 菜单栏 MenuType-->
    <MenuType/>
    
    <!-- w3c头条 内容区域 IndexContainer-->
    <div class="index-container">
      <MyHeadlines/>
    </div>

    <!-- 内容区域 IndexContainer-->
    <IndexContainer/>

    <!-- 底部抽屉 -->
    <div class="widget-body" data-type="index"></div>

    <!-- 底部 -->
    <!-- footer start  底部区域 MyFooter-->
    <MyFooter/>
    
    <!-- ToolBar 侧边工具栏：判断完页面是否植入美洽后再显示，防止闪烁 -->
    <ToolBar/>
    
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import MyHeader from "./components/MyHeader";
import MyNav from "./components/MyNav";
import MenuType from "./components/MenuType";
import MyHeadlines from "./components/IndexContainer/MyHeadlines";
import IndexContainer from "./components/IndexContainer";
import MyFooter from "./components/MyFooter";
import ToolBar from "./components/ToolBar"

export default {
  name: "App",
  components: {
    MyHeader,
    MyNav,
    MenuType,
    MyHeadlines,
    IndexContainer,
    MyFooter,
    ToolBar
  },
};
</script>

<style>
</style>
