<template>
  <div class="headlines">
    <em class="fl headlines-icon"><i class="i-icon i-icon-horn"></i></em>
    <a
      class="fr headlines-more"
      href="//www.w3cschool.cn/article"
      target="_blank"
      title="查看更多"
      ><i class="i-icon i-icon-more"></i
    ></a>
    <ul class="headlines-list">
      <li>
        <span class="fr headlines-time">12-16</span>
        <div class="single-ellipsis headlines-content">
          <a
            href="//www.w3cschool.cn/article/89456381.html"
            target="_blank"
            title="VIP权益升级：一大波优质Python好课即将来袭，VIP免费学"
            >VIP权益升级：一大波优质Python好课即将来袭，VIP免费学</a
          >
        </div>
      </li>
      <li>
        <span class="fr headlines-time">12-22</span>
        <div class="single-ellipsis headlines-content">
          <a
            href="//www.w3cschool.cn/article/13710700.html"
            target="_blank"
            title="麻雀虽小，五脏俱全——python web框架Flask介绍"
            >麻雀虽小，五脏俱全——python web框架Flask介绍</a
          >
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "MyHeadlines",
  data() {
    return {};
  },
};
</script>

<style scoped>
/* ------- 推广模块 ------- */
.headlines { height: 45.14px; margin-left: 220px; padding: 11px 12px 0; border-width: 0 1px 1px; border-style: solid; border-color: #eee; }
.headlines .headlines-icon .i-icon { font-size: 25px; color: #fe6a00; }
.headlines .headlines-more { color: #999; }
.headlines .headlines-more:hover { color: #fe6a00; }
.headlines .headlines-more .i-icon { font-size: 20px; line-height: 25px; }

.headlines .headlines-list { margin: 0 36px; font-size: 0; }
.headlines .headlines-list li { display: inline-block; width: 50%; font-size: 14px; line-height: 25px; }
.headlines .headlines-list li:nth-child(2n) { padding-left: 16px; }
.headlines .headlines-list li:nth-child(2n+1) { padding-right: 16px; }
.headlines .headlines-list .headlines-time { font-size: 13px; color: #666; }
.headlines .headlines-list .headlines-content { margin-right: 45px; }
.headlines .headlines-list .headlines-content::before { content: "•"; margin-right: 4px; color: #fe6a00; }

@media (min-width: 1300px) {
    .headlines { height: 51.84px; padding: 14px 12px 0; }
}
</style>