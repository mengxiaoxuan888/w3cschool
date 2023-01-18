<template>
  <div id="app">
    <!-- 路由组件出口地方 -->
    <router-view></router-view>
    <AppList/>  
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
// import MyHeader from "./components/MyHeader";
// import MyNav from "./components/MyNav";
// import MenuType from "./components/MenuType";
// import MyHeadlines from "./components/IndexContainer/MyHeadlines";
// import IndexContainer from "./components/IndexContainer";
// import MyFooter from "./components/MyFooter";
// import ToolBar from "./components/ToolBar";
import AppList from "./components"

export default {
  name: "App",
  components: {
    AppList
  },
};
</script>

<style>
</style>
