<template>
  <div class="layer official-tutorial-layer">
    <h2 class="layer-title">
      热门官方文档<a href="/dict" target="_blank" class="more">更多 »</a>
    </h2>
    <div class="tutorial-project">
      <ul class="project-list">
        <li class="project-list-item-wrap" v-for="item in offProjectList" :key="item.id">
          <a class="clearfix project-list-item" :href="item.href" :title="item.title">
            <div class="fl cover">
              <img :src="item.src" :alt="item.alt" width="64">
              <!-- <div
                style="
                  background-image: url(/statics/images/dict/python-logo.png);
                  background-image: none\9;
                  width: 64px;
                  height: 64px;
                  background-size: 90%;
                  background-position: center;
                  background-repeat: no-repeat;
                  background-color: #fff;
                "
                class="logo"
              ></div> -->
            </div>
            <div class="info">
              <h4 class="single-ellipsis info-title">{{item.name}}</h4>
              <p class="double-ellipsis info-des">
                {{item.info}}
              </p>
            </div>
          </a>
        </li>       
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyOffical",
  data() {
    return {
      offProjectList:[
        {
          "id":1,
          "href":"/python/dict.html",
          "title":"Python Cheat Sheet",
          "src":"./statics/images/python-logo.png",
          "alt":"Python Cheat Sheet",
          "name":"Python",
          "info":"Python 是一个高层次的结合了解释性、编译性、互动性和面向对象的脚本语言。"
        },
        {
          "id":2,
          "href":"/jquery/dict.html",
          "title":"jQuery Cheat Sheet",
          "src":"./statics/images/jquery-logo.jpg",
          "alt":"jQuery Cheat Sheet",
          "name":"jQuery",
          "info":"jQuery 是一个 JavaScript 库。jQuery 极大地简化了 JavaScript 编程。 jQuery 很容易学习。"
        },
      ]
    };
  },
};
</script>

<style scoped>
/* 教程 - 热门极客教程 */
.official-tutorial-layer .tutorial-project { margin-top: 20px; border-radius: 8px; box-shadow: 0 4px 30px 0 rgba(238, 242, 245, 0.8); }
.official-tutorial-layer .tutorial-project .project-list-item-wrap { width: 25%; }
.official-tutorial-layer .tutorial-project .project-list { padding-top: 10px; padding-bottom: 30px; }

</style>