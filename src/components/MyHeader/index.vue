<template>
  <div id="header">
    <div class="clearfix index-container">
      <h1 class="fl h-logo">
        <router-link class="img" to="/" title="w3cschool">
          <img
            src="./images/indexlogo.png"
            alt="w3cschool"
            width="214"
            height="50"
          />
          <div style="text-indent: -9999px">
            w3cschool - 编程狮，随时随地学编程
          </div>
        </router-link>
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
                    src="./images/app-qrcode2.png"
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
            <router-link class="link" to="/register">注册</router-link>
            <span class="sep">|</span>
            <router-link class="link" to="/login">登录</router-link>
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
                <li class="clearfix activity-item always" v-for="item in searchDropdownActivity" :key="item.id">
                  <div class="fl activity-item-title">{{item.name}}</div>
                  <a
                    :href="item.href"
                    target="_blank"
                    class="activity-item-content"
                    :title="item.title"
                    >{{item.title}}</a
                  >
                </li>             
              </ul>
              <div class="search-dropdown-history">
                <div class="history-title">热门搜索</div>
                <ul class="clearfix history-list">
                  <li class="fl history-list-item" v-for="(item, index) in historylistItems" :key="index">
                    {{ item }}
                  </li>
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
    return {
      historylistItems: ["Python", "Java", "HTML"],
      searchDropdownActivity:[
        {id:1,name:"职位课程",href:"/group/senior/initfrontend?fcode=search_recommend",title:"从零基础到前端开发就业"},
        {id:2,name:"职位课程",href:"/group/senior/initphp?fcode=search_recommend",title:"PHP工程师从入门到入职"}
      ]
    };
  },
};
</script>

<style scoped>
/* ------- 头部 ------- */
#header {
  height: 80px;
}
#header .h-logo {
  width: 220px;
  height: 50px;
  margin-top: 15px;
}
#header .h-logo > .img {
  display: block;
  width: 214px;
  height: 100%;
  margin: 0 auto;
}

#header .h-search {
  box-sizing: content-box;
  height: 40px;
  margin-left: 220px;
  margin-right: 242px;
  padding-top: 20px;
}
#header .h-search .search-box {
  width: 460px;
  height: 100%;
  margin: 0 auto;
}
#header .h-search .search-box-form {
  position: relative;
  z-index: 9;
  overflow: hidden;
  height: 40px;
  border: 2px solid #fe6a00;
  border-radius: 4px 0 0 4px;
  background-color: #fff;
  -webkit-transition: height 0.24s;
  transition: height 0.24s;
}
#header .h-search .search-box-form.focus {
  border-radius: 4px 0 4px 4px;
}
#header .h-search .search-box-form .input {
  display: block;
  width: 398px;
  height: 36px;
  padding: 0 16px;
  font-size: 14px;
  border: none;
}
#header .h-search .search-box-submit {
  width: 58px;
  height: 100%;
  background-color: #fe6a00;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
}
#header .h-search .search-box-submit .i-icon {
  font-size: 18px;
  color: #fff;
}
#header .search-dropdown {
  margin: 0 16px;
  border-top: 2px solid #f5f5f6;
}
#header .search-dropdown-activity {
  padding: 12px 0;
}
#header .search-dropdown-activity .activity-item {
  font-size: 14px;
  line-height: 24px;
}
#header .search-dropdown-activity .activity-item + .activity-item {
  margin-top: 8px;
}
#header .search-dropdown-activity .activity-item-title {
  min-width: 68px;
  padding: 0 8px;
  text-align: center;
  border-radius: 4px;
}
#header .search-dropdown-activity .activity-item-content {
  overflow: hidden;
  display: block;
  padding-left: 8px;
}
#header
  .search-dropdown-activity
  .activity-item.temporary
  .activity-item-title {
  color: #fff;
  background-color: #e13534;
}
#header
  .search-dropdown-activity
  .activity-item.temporary
  .activity-item-content {
  color: #e13534;
}
#header .search-dropdown-activity .activity-item.always .activity-item-title {
  color: #6d440a;
  background-color: #d4b153;
}
#header .search-dropdown-activity .activity-item.always .activity-item-content {
  color: #6d440a;
}
#header .search-dropdown-history {
  padding: 12px 0;
}
#header .search-dropdown-history .history-title {
  font-size: 14px;
  color: #262626;
}
#header .search-dropdown-history .history-list-item {
  display: inline-block;
  margin-top: 8px;
  margin-right: 8px;
  padding: 0 8px;
  font-size: 12px;
  color: #595959;
  vertical-align: middle;
  background-color: #f0f0f0;
  border-radius: 100px;
  cursor: pointer;
  -webkit-transition: all 0.24s;
  transition: all 0.24s;
}
#header .search-dropdown-history .history-list-item:hover {
  color: #434343;
  background-color: #d9d9d9;
}

@media (min-width: 1300px) {
  #header .h-search .search-box {
    width: 520px;
  }
  #header .h-search .search-box .input {
    width: 458px;
  }
}

/* 下拉菜单 */
.dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  z-index: 99;
  overflow: hidden;
  background-color: transparent;
  transition: height 0.24s ease;
}
.dropdown-inner {
  position: relative;
  margin: 12px 4px 4px;
  background-color: #fff;
  box-shadow: 0 1px 4px #aaa;
  border-radius: 4px;
}
.dropdown-inner::before {
  content: "";
  position: absolute;
  top: -6px;
  right: 50%;
  z-index: 1;
  width: 16px;
  height: 16px;
  background-color: #fff;
  box-shadow: -2px -2px 4px #ddd;
  -webkit-transform: translateX(50%) rotate(45deg);
  -moz-transform: translateX(50%) rotate(45deg);
  -ms-transform: translateX(50%) rotate(45deg);
  transform: translateX(50%) rotate(45deg);
}
.dropdown-content {
  position: relative;
  z-index: 2;
  overflow: hidden;
  background-color: #fff;
  border-radius: 4px;
}

/* 头部右侧 */
.h-right {
  margin-top: 22px;
  font-size: 14px;
  line-height: 36px;
}
.h-right .link {
  padding: 0 8px;
}

.h-right .mobile {
  position: relative;
  margin-right: 24px;
}
.h-right .mobile .link {
  display: block;
}
.h-right .mobile .i-icon {
  margin-right: 3px;
  font-size: 22px;
  color: #fe6a00;
}

.h-right .mobile .dropdown {
  width: 178px;
  height: 0;
  right: -48px;
}
.h-right .mobile:hover .dropdown {
  height: 204px;
}
.h-right .mobile .dropdown-content {
  padding: 0 10px;
}
.h-right .mobile .dropdown-content .qrcode {
  margin: 8px 0 12px;
}
.h-right .mobile .dropdown-content .qrcode > p {
  margin: 4px 0 0;
  padding: 0;
  font-size: 14px;
  line-height: 1;
}
</style>