<template>
  <!--header start-->
  <div id="header" class="header-with-search pro_header">
    <div id="header_item">
      <div id="header_index">
        <div id="header-l">
          <a href="//www.w3cschool.cn" title="w3cschool" class="logo">
            <img src="../images/logonew2.png" alt="w3cschool" />
          </a>
          <ul class="header-menu">
            <li
              class="nav-menu-item"
              v-for="item in navMenuItem"
              :key="item.id"
            >
              <a :href="item.href" target="_blank" :title="item.title">{{
                item.title
              }}</a>
            </li>
          </ul>
        </div>

        <div class="fr h-right">
          <div class="fl mobile">
            <a
              class="link"
              href="//www.w3cschool.cn/download"
              target="_blank"
              title="App下载"
            >
              <i class="i-icon i-icon-mobile"></i>App下载
            </a>
            <div class="dropdown">
              <div class="dropdown-inner">
                <div class="text-center dropdown-content">
                  <div class="qrcode">
                    <img
                      src="//7n.w3cschool.cn/statics/images/w3c/app-qrcode2.png"
                      alt="APP二维码"
                      width="150"
                      height="150"
                    />
                    <p>扫码下载编程狮APP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="fl sig-box">
            <div>
              <a class="link" href="//www.w3cschool.cn/register?refer=/">注册</a
              ><span class="sep">|</span
              ><a class="link" href="//www.w3cschool.cn/login?refer=/">登录</a>
            </div>
          </div>
        </div>

        <div class="fr searchbox">
          <form action="/search" target="_self">
            <input
              type="text"
              name="w"
              class="box"
              id="searched_content"
              placeholder="输入关键字搜索..."
            />
            <button type="submit" class="button"></button>
          </form>
        </div>
      </div>
    </div>
  </div>
  <!--header end-->
</template>

<script>
export default {
  name: "SearchHeader",
  data() {
    return {
      navMenuItem: [
        { id: 1, href: "/tutorial", title: "编程入门教程" },
        { id: 2, href: "/courses", title: "编程课程" },
        { id: 3, href: "/codecamp", title: "编程实战" },
        { id: 4, href: "/exam", title: "编程题库" },
        { id: 5, href: "//123.w3cschool.cn/webtools", title: "在线工具" },
        { id: 6, href: "/vip?fcode=indexmenu", title: "VIP会员" },
      ],
    };
  },
};
</script>

<style>
</style>