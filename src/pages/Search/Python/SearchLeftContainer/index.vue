<template>
  <div id="m-splitter">
    <!-- 搜索页左侧菜单栏部分 -->
    <LeftContainer></LeftContainer>

    <div class="splitter-handle left-drager">
      <div class="left-dragger-c splitter-handle-highlight"></div>
    </div>

    <!-- 搜索页右侧内容部分 -->
    <MainContainer></MainContainer>

  </div>
</template>

<script>
import LeftContainer from "./LeftContainer"
import MainContainer from "./MainContainer"
export default {
    name: "SearchLeftContainer",
    components:{
    LeftContainer,
    MainContainer
}
};
</script>

<style>
</style>