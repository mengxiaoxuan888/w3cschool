<template>
  <div class="clearfix layer friendly-layer">
    <h4 class="fl title">友情链接</h4>
    <div class="link-wrap">
      <a v-for="item in linkWrap" :key="item.id" class="link" :href="item.href" :title="item.title" target="_blank">
        {{item.name}}
      </a>
      <a class="link" href="/links" target="_blank">更多&raquo;</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyFriendly",
  data() {
    return {
      linkWrap:[
        {
          "id":1,
          "href":"https://www.w3cschool.cn/",
          "title":"W3Cschool",
          "name":"W3Cschool"
        },
        {
          "id":2,
          "href":"https://www.w3cschool.cn/",
          "title":"W3C编程狮",
          "name":"编程狮(W3C)"
        }
      ]
    };
  },
};
</script>

<style scoped>
/* 友情链接 */
.friendly-layer .title { font-size: 16px; font-weight: 600; }
.friendly-layer .title::after { content: ":"; position: relative; top: -0.5px; margin: 0 8px 0 2px; }
.friendly-layer .link-wrap { padding-top: 2px; margin-left: 80px; }
.friendly-layer .link { display: inline-block; margin: 0 20px 12px 0; font-size: 14px; }

</style>