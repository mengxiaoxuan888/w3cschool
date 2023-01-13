<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: '欢迎来到我的世界'
    }
  },
}
</script>

<!-- 样式，加入scoped则该样式只对该组件生效 -->
<style scoped>

</style>
