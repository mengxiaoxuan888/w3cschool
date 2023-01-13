<template>
  <div class="index-container">
    <!-- 推广 -->
    <MySpread />

    <!-- 极客教程 -->
    <MyTutorial />

    <!-- 热门官方文档 -->
    <MyOffical />

    <!-- 最近更新 -->
    <MyUpdate />

    <!-- 友情链接 -->
    <MyFriendly />
  </div>
</template>

<script>
import MySpread from "./MySpread";
import MyTutorial from "./MyTutorial";
import MyOffical from "./MyOffical";
import MyUpdate from "./MyUpdate";
import MyFriendly from "./MyFriendly";

export default {
  name: "IndexContainer",
  components: {
    MySpread,
    MyTutorial,
    MyOffical,
    MyUpdate,
    MyFriendly,
  },
};
</script>

<style>
</style>