<template>
  <div id="header">
    <div class="clearfix index-container">
      <h1 class="fl h-logo">
        <a class="img" href="//www.w3cschool.cn" title="w3cschool">
          <img
            src="/statics/images/indexlogo.png"
            alt="w3cschool"
            width="214"
            height="50"
          />
          <div style="text-indent: -9999px">
            w3cschool - 编程狮，随时随地学编程
          </div>
        </a>
      </h1>

      <div class="fr h-right">
        <div class="fl mobile">
          <a
            class="link"
            href="//www.w3cschool.cn/download"
            target="_blank"
            title="w3cschool App下载"
          >
            <i class="i-icon i-icon-mobile"></i>App下载
          </a>
          <div class="dropdown">
            <div class="dropdown-inner">
              <div class="text-center dropdown-content">
                <div class="qrcode">
                  <img
                    src="//7n.w3cschool.cn/statics/images/w3c/app-qrcode2.png"
                    alt="下载编程狮"
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

      <div class="h-search">
        <div class="search-box">
          <button class="fr search-box-submit" onclick="submitSearch()">
            <i class="i-icon i-icon-search"></i>
          </button>
          <form class="search-box-form" action="/search" method="GET">
            <input
              class="input"
              type="text"
              name="w"
              autocomplete="off"
              placeholder="在1000+高质量的免费教程&开发文档中搜索你需要的..."
            />
            <div class="search-dropdown">
              <ul class="search-dropdown-activity">
                <li class="clearfix activity-item always">
                  <div class="fl activity-item-title">职位课程</div>
                  <a
                    href="/group/senior/initfrontend?fcode=search_recommend"
                    target="_blank"
                    class="activity-item-content"
                    title="从零基础到前端开发就业"
                    >从零基础到前端开发就业</a
                  >
                </li>
                <li class="clearfix activity-item always">
                  <div class="fl activity-item-title">职位课程</div>
                  <a
                    href="/group/senior/initphp?fcode=search_recommend"
                    target="_blank"
                    class="activity-item-content"
                    title="PHP工程师从入门到入职"
                    >PHP工程师从入门到入职</a
                  >
                </li>
              </ul>
              <div class="search-dropdown-history">
                <div class="history-title">热门搜索</div>
                <ul class="clearfix history-list">
                  <li class="fl history-list-item">Python</li>
                  <li class="fl history-list-item">Java</li>
                  <li class="fl history-list-item">HTML</li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyHeader",
  data() {
    return {};
  },
};
</script>

<style>
</style>