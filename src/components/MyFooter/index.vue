<template>
  <div id="footer_item">
    <div id="footer">   
      <div class="footer-box" v-for="item in footerBoxs" :key="item.id">
        <div class="footer-title">{{item.name}}</div>
        <ul class="footer-items">
          <li v-for="list in item.footerItems" :key="list.id">
            <a :href="list.href" target="_blank" :title="list.title">{{list.name}}</a>
          </li>
        </ul>
      </div>

      <!-- 这里是hjf加的 -->
      <div class="footer-box">
        <div class="tcode">
          <img
            src="//7n.w3cschool.cn/statics/images/w3c/app-qrcode2.png"
            alt="加入App二维码"
            width="100"
            height="100"
          />
        </div>
        <p class="tcode-txt">下载App</p>
      </div>

      <div class="footer-box">
        <div class="tcode">
          <img
            src="//atts.w3cschool.cn/w3cschool_fwh.png"
            alt="微信服务号"
            width="100"
            height="100"
          />
        </div>
        <p class="tcode-txt">关注公众号</p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>
        Copyright&copy;2021&nbsp;
        <a href="//www.w3cschool.cn" target="_blank" title="w3cschool">
          w3cschool
        </a>
        编程狮<span>|</span>
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="nofollow" class="footer-record">
          闽ICP备15016281号-3
        </a>
        <span>|</span>
        <a
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=35020302033924"
          target="_blank"
          rel="nofollow"
          ><i class="beian"></i>闽公网安备35020302033924号
        </a>
      </p>
      <p>
        违法和不良信息举报电话：173-0602-2364<span>|</span>
        <a href="mailto:jubao@eeedong.com">举报邮箱：jubao@eeedong.com</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  data() {
    return {
      footerBoxs:[
        {
          "id":1,
          "name":"网站相关",
          "footerItems":[
            {
              "id":1,
              "href":"//www.w3cschool.cn/about/about.html",
              "title":"关于w3cschool",
              "name":"关于w3cschool"
            },
            {
              "id":2,
              "href":"//www.w3cschool.cn/about/about.html",
              "title":"加入我们",
              "name":"加入我们"
            },
            {
              "id":3,
              "href":"//www.w3cschool.cn/about/about.html",
              "title":"网站地图",
              "name":"网站地图"
            },
            {
              "id":4,
              "href":"//www.w3cschool.cn/about/about.html",
              "title":"文章存档",
              "name":"文章存档"
            },
          ]
        },
        {
          "id":2,
          "name":"常用链接",
          "footerItems":[
            {
              "id":1,
              "href":"//www.w3cschool.cn/about/about.html",
              "title":"编程实战",
              "name":"编程实战"
            },
            {
              "id":2,
              "href":"//www.w3cschool.cn/about/about.html",
              "title":"课程合作",
              "name":"课程合作"
            },
            {
              "id":3,
              "href":"//www.w3cschool.cn/about/about.html",
              "title":"w3cschool离线下载",
              "name":"w3cschool离线下载"
            },
            {
              "id":4,
              "href":"//www.w3cschool.cn/about/about.html",
              "title":"w3cschool手机版",
              "name":"w3cschool手机版"
            },
          ]
        },
        {
          "id":3,
          "name":"官方APP",
          "footerItems":[
            {
              "id":1,
              "href":"//www.w3cschool.cn/about/about.html",
              "title":"w3cschool编程狮",
              "name":"w3cschool编程狮"
            },
            {
              "id":2,
              "href":"//www.w3cschool.cn/about/about.html",
              "title":"Python编程狮",
              "name":"Python编程狮"
            },
            {
              "id":3,
              "href":"//www.w3cschool.cn/about/about.html",
              "title":"Java编程狮",
              "name":"Java编程狮"
            },
            {
              "id":4,
              "href":"//www.w3cschool.cn/about/about.html",
              "title":"编程狮工具箱",
              "name":"编程狮工具箱"
            },
          ]
        },
        {
          "id":4,
          "name":"联系我们",
          "footerItems":[
            {
              "id":1,
              "href":"//www.w3cschool.cn/about/about.html",
              "title":"常见问题QA",
              "name":"常见问题QA"
            },
            {
              "id":2,
              "href":"//www.w3cschool.cn/about/about.html",
              "title":"官方QQ群：668469541",
              "name":"官方QQ群：668469541"
            },
            {
              "id":3,
              "href":"//www.w3cschool.cn/about/about.html",
              "title":"商务合作QQ：3532917531",
              "name":"商务合作QQ：3532917531"
            },
            {
              "id":4,
              "href":"//www.w3cschool.cn/about/about.html",
              "title":"企业采购微信号：Marlboro90",
              "name":"企业采购微信号：Marlboro90"
            },
          ]
        },
      ]
    };
  },
};
</script>

<style scoped>
/* ------- 底部 ------- */
#footer_item {
    width: 100%;
    min-width: 1130px;
    background: #efefef;
    border-top: 1px solid #ccc;
    padding: 20px 0;
}
#footer {
    clear: both;
    position: relative;
    margin: 0 auto;
    width: 1130px;
    height: auto;
    overflow: hidden;
}
.footer-box {
    float: left;
    /*width: 19%;*/
    width: 15.5%;
    margin-left: 1%;
    text-align: left;
}
.footer-title {
    font-size: 15px;
    font-weight: 600;
    color: #333;
    margin-bottom: 5px;
    line-height: 30px;
}
.footer-items a,.footer-items p {
    line-height: 26px;
    font-size: 14px;
    color: #333;
}
.footer-items p {
    margin: 0;
}
.footer-items a .service-qrcode {
    display: none;
    width: 100px;
    position: absolute;
    top: 8px;
    margin-left: 50px;
}
.footer-items a:hover .service-qrcode {
    display: block;
}
.footer-box .tcode {
    width: 100px;
    height: 100px;
    margin: 10px auto;
}
.footer-box .tcode-txt {
    font-size: 14px;
    color: #333;
    text-align: center;
    margin: 0 10px;
}
.footer-bottom {
    margin: 0px auto;
    width: 1130px;
    padding: 10px 0 0;
    text-align: center;
    line-height: 30px;
}
.footer-bottom p {
    font-size: 13px;
    color: #666;
    line-height: 30px;
}
.footer-bottom p a {
	color: #666;
}
.footer-bottom p span {
	margin: 0 5px;
}
.footer-bottom .beian {
    background: url(//7n.w3cschool.cn/statics/images/w3c/beianicon.png) no-repeat 0 0;
    width: 16px;
    height: 16px;
    vertical-align: middle;
    background-size: cover;
    display: inline-block;
    margin-right: 4px;
    margin-top: -4px;
}
#footer a:hover {
    text-decoration: underline;
    color: #fe6a00;
}

#wrapper {
	width: 1129px;
	margin: 25px auto 45px;
	min-height: 600px;
	overflow: hidden;
}
.wrapper-bg {
	background: #ffffff;
}
.index-wrapper {
	width: 1129px;
	margin: 0 auto;
	padding: 25px 0;
	overflow: hidden;
}

#navsecond,#sidebar {
	background: #efefef;
}
#sidebar { float: left; width: 190px; }

#navsecond h2,#sidebar h2 {
	font-size: 15px;
	color: #333;
	word-wrap: normal;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
}
#navsecond li,#sidebar li {
	font-size: 14px;
	color: #333;
	line-height: 22px;
	word-wrap: normal;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
}
#navsecond li a,#sidebar li a,#navsecond h2 a {
	color: #333;
}
#navsecond li a:hover,#sidebar li a:hover,#navsecond h2 a:hover {
	color: #ff0000;
}
#course {
	background-color: #B6B6B6;
	padding: 7px 0;
	border-top-left-radius: 3px;
    border-top-right-radius: 3px;
}
#course h2 {
	font-size: 16px;
	color: #fff;
	text-align: center;
	letter-spacing: 3px;
}
#maincontent {
	float: left;
	width: 719px;
	background-color: #ffffff;
	padding: 0 15px;
	font-size: 14px;
	color: #333;
}
#maincontent h1 {
	font-size: 20px;
}
#maincontent h1::before {
    content: "";
    background: #AE4141;
    display: inline-block;
    width: 7px;
    height: 7px;
    margin-right: 8px;
    margin-bottom: 3px;
    vertical-align: middle;
}
#maincontent h2 {
	font-size: 16px;
}
#maincontent div {
	padding: 20px 0;
	border-top: 1px solid #CCC;
}
#maincontent div:first-of-type {
	border-top: none;
}
#maincontent ol,#maincontent ul {
	margin-left: 25px;
}
#maincontent li,#maincontent p {
	line-height: 24px;
	margin-top: 10px;
}
#maincontent ol li {
	list-style-type: decimal;
}
#maincontent ul li,#maincontent ol li li {
	list-style-type: disc;
}
#maincontent ol ul li {
	list-style-type: lower-alpha;
}
.news-content {
    float: left;
    width: 884px;
    min-height: 600px;
    margin-right: 15px;
    background: #FFF;
}
.news-page {
    padding: 20px;
}
.column-content {
	padding: 20px;
	background-color: #FFF;
	min-height: 600px;
	overflow: hidden;
}
.archive-content li {
	height: 30px;
	line-height: 30px;
	padding: 10px 0;
	border-bottom: 1px dashed #DDD;
}
.archive-content li h4 {
	font-weight: 500;
	font-size: 14px;
}
.archive-list span {
	float: right;
	font-size: 13px;
	color: #666;
}
.page-header {
	margin-bottom: 10px;
}
.page-header h2 {
	border-bottom: 1px solid #DDD;
	font-size: 24px;
    font-weight: 500;
	color: #333;
	padding-bottom: 10px;
}
.page-header .intro {
	font-size: 16px;
	color: #333;
	margin-top: 20px;
}
.bread-nav {
    margin-bottom: 15px;
    font-size: 14px;
}
.bread-nav img {
	vertical-align: middle;
}
.bread-nav-banner,.bread-nav-banner a {
    color: #fff;
    opacity: 0.8;
}
.bread-nav-banner a:hover {
    opacity: 1;
}
.abox {
	text-align: center;
	padding: 15px 0;
}
.sidebar-box .tcode {
	margin: 15px 0 0;
	text-align: center;
}
</style>