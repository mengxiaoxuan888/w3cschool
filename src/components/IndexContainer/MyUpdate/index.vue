<template>
  <div class="clearfix layer update-layer">
    <div class="fl update-wrap">
      <div class="clearfix update-wrap-title">
        <h4 class="fl title">最新文章</h4>
        <a href="//www.w3cschool.cn/article" target="_blank" class="fr more-btn"
          >更多 »</a
        >
      </div>
      <div class="update-list">
        <ul class="update-list-ul">
          <li class="update-list-li">
            <a
              href="//www.w3cschool.cn/article/89456381.html"
              title="VIP权益升级：一大波优质Python好课即将来袭，VIP免费学"
              target="_blank"
              >VIP权益升级：一大波优质Python好课即将来袭，VIP免费学</a
            >
            <span class="update-time">12-16</span>
          </li>
          <li class="update-list-li">
            <a
              href="//www.w3cschool.cn/article/13710700.html"
              title="麻雀虽小，五脏俱全——python web框架Flask介绍"
              target="_blank"
              >麻雀虽小，五脏俱全——python web框架Flask介绍</a
            >
            <span class="update-time">12-22</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- 最新教程 -->
    <div class="fl update-wrap update-wrap-tutorial">
      <div class="clearfix update-wrap-title">
        <h4 class="fl title">最新教程</h4>
        <a href="/archives" target="_blank" class="fr more-btn">更多 »</a>
      </div>
      <div class="update-list">
        <ul class="update-list-ul">
          <li class="update-list-li">
            <a
              href="//www.w3cschool.cn/dypav/dypav-e9mf3qs9.html"
              title="代码包和包引入"
              target="_blank"
              >Go语言101<span class="text-split"></span>代码包和包引入</a
            >
            <span class="update-time">12-27</span>
          </li>
          <li class="update-list-li">
            <a
              href="//www.w3cschool.cn/dypav/dypav-zlde3qs8.html"
              title="函数声明和调用"
              target="_blank"
              >Go语言101<span class="text-split"></span>函数声明和调用</a
            >
            <span class="update-time">12-27</span>
          </li>
        </ul>
      </div>
    </div>

    <!-- 最新工具 -->
    <div class="fl update-wrap">
      <div class="clearfix update-wrap-title">
        <h4 class="fl title">最新工具</h4>
        <a href="/tool" target="_blank" class="fr more-btn">更多 »</a>
      </div>
      <div class="update-list">
        <ul class="update-list-ul">
          <li class="update-list-li">
            <a
              href="//www.w3cschool.cn/tool/173743.html"
              title="JetBrains Fleet v2022.10 for Windows x64 安装包官网下载地址"
              target="_blank"
              >JetBrains Fleet v2022.10 for Windows x64 安装包官网下载地址</a
            >
            <span class="update-time">10-20</span>
          </li>
          <li class="update-list-li">
            <a
              href="//www.w3cschool.cn/tool/149482.html"
              title="Microsoft Silverlight For Windows64位官方下载"
              target="_blank"
              >Microsoft Silverlight For Windows64位官方下载</a
            >
            <span class="update-time">12-23</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyUpdate",
  data() {
    return {};
  },
};
</script>

<style scoped>
/* 最近更新、友情链接 */
.update-layer { padding: 18px 0; margin-left: -24px; }
.update-layer .update-wrap { width: 350px; margin-left: 24px; }
.update-layer .update-wrap-tutorial { width: 392px;}
.update-layer .update-wrap-title { margin-bottom: 15px; }
.update-layer .update-wrap-title .title { font-size: 16px; font-weight: 600; }
.update-layer .update-wrap-title .more-btn {float: right;font-size: 14px;color: #666;line-height: 26px; }
.update-layer .update-list { padding: 15px; border-radius: 4px; box-shadow: 0 4px 30px 0 rgba(238, 242, 245, 0.8); }
.update-layer .update-list li { height: 26px; line-height: 26px; margin-bottom: 8px;}
.update-layer .update-list li a { display: inline-block; font-size: 14px; width: 80%; word-wrap: normal; white-space: nowrap; text-overflow: ellipsis; overflow: hidden; }
.update-layer .update-list li a::before { content: ""; background: #fe6a00; display: inline-block; width: 4px; height: 4px; margin-right: 8px; vertical-align: middle; border-radius: 50%; }
.update-layer .update-list li .update-time { float: right; font-size: 13px; color: #666; }
.update-layer .update-list li .text-split::after {content: "-"; margin: 0 6px;}
@media (min-width: 1300px) {
    .update-layer .update-wrap-tutorial { width: 492px;} 
}
</style>