<template>
  <div class="layer official-tutorial-layer">
    <h2 class="layer-title">
      热门官方文档<a href="/dict" target="_blank" class="more">更多 »</a>
    </h2>
    <div class="tutorial-project">
      <ul class="project-list">
        <li class="project-list-item-wrap">
          <a
            class="clearfix project-list-item"
            href="/python/dict.html"
            title="Python Cheat Sheet"
          >
            <div class="fl cover">
              <!-- <img src="/statics/images/dict/python-logo.png" alt="Python Cheat Sheet" width="64"> -->
              <div
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
              ></div>
            </div>
            <div class="info">
              <h4 class="single-ellipsis info-title">Python</h4>
              <p class="double-ellipsis info-des">
                Python
                是一个高层次的结合了解释性、编译性、互动性和面向对象的脚本语言。
              </p>
            </div>
          </a>
        </li>
        <li class="project-list-item-wrap">
          <a
            class="clearfix project-list-item"
            href="/jquery/dict.html"
            title="jQuery Cheat Sheet"
          >
            <div class="fl cover">
              <!-- <img src="/statics/images/dict/jquery-logo.jpg" alt="jQuery Cheat Sheet" width="64"> -->
              <div
                style="
                  background-image: url(/statics/images/dict/jquery-logo.jpg);
                  background-image: none\9;
                  width: 64px;
                  height: 64px;
                  background-size: 90%;
                  background-position: center;
                  background-repeat: no-repeat;
                  background-color: #fff;
                "
              ></div>
            </div>
            <div class="info">
              <h4 class="single-ellipsis info-title">jQuery</h4>
              <p class="double-ellipsis info-des">
                jQuery 是一个 JavaScript 库。 jQuery 极大地简化了 JavaScript
                编程。 jQuery 很容易学习。
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
    return {};
  },
};
</script>

<style>
</style>