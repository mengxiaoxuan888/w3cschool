<template>
  <div>
    <!-- 教程内容页 未登录 -->
    <div id="full-height-container" class="project-container color-theme-white">
      <!--控制本地颜色主题样式-->

      <!-- 教程内容页头部 -->
      <!--header组件-->
      <SearchHeader/>
      <!-- 下面部分 -->
      <!-- <SearchLeftContainer/> -->
      <!-- 真正需要展示的内容，是python就展示python -->
      <router-view></router-view>
    </div>

    <!-- 侧边小部件 -->
    <!-- <div class="side-widget">
      <div class="side-widget-container">
        <div class="side-widget-item backtop" data-visibility="50">
          <div class="widget-icon"></div>
        </div>
      </div>
    </div> -->
    <ToolBar/>

    <!-- 图片放大根元素，必须有类 pswp -->
    <div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
      <!-- 背景 -->
      <div class="pswp__bg"></div>
      <div class="pswp__scroll-wrap">
        <!-- 幻灯片容器，在DOM中保留其中3个以节省内存，不要修改 -->
        <div class="pswp__container">
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
          <div class="pswp__item"></div>
        </div>
        <div class="pswp__ui pswp__ui--hidden">
          <div class="pswp__top-bar">
            <div class="pswp__counter"></div>
            <button
              class="pswp__button pswp__button--close"
              title="Close (Esc)"
            ></button>
            <!-- <button class="pswp__button pswp__button--share" title="Share"></button> -->
            <button
              class="pswp__button pswp__button--fs"
              title="Toggle fullscreen"
            ></button>
            <button
              class="pswp__button pswp__button--zoom"
              title="Zoom in/out"
            ></button>

            <div class="pswp__preloader">
              <div class="pswp__preloader__icn">
                <div class="pswp__preloader__cut">
                  <div class="pswp__preloader__donut"></div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap"
          >
            <div class="pswp__share-tooltip"></div>
          </div>
          <button
            class="pswp__button pswp__button--arrow--left"
            title="Previous (arrow left)"
          ></button>
          <button
            class="pswp__button pswp__button--arrow--right"
            title="Next (arrow right)"
          ></button>
          <div class="pswp__caption">
            <div class="pswp__caption__center"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchHeader from "./SearchHeader"
import ToolBar from "../../components/ToolBar"

export default {
  name: "Search",
  data() {
    return {
      
    }
  },
  components:{
    SearchHeader,
    ToolBar
  }
};
</script>

<style scoped>
.note-list-title {
  float: left;
}

.note-list-info {
  overflow: hidden;
}
.recommend-article,
.recommend-project {
  -webkit-flex: 1;
  flex: 1;
}
.recommend-option:last-child {
  margin-right: 0;
}
.recommend-option h2 {
  font-size: 16px;
  margin-bottom: 15px;
}
.recommend-option ul {
  box-shadow: 0 0 24px rgb(199 207 225 / 41%);
  padding: 15px;
  border-radius: 4px;
}
.recommend-option li {
  /*display: inline-block;*/
  /* padding: 5px 0; */
  /*margin-right: 15px;*/
  height: 26px;
  line-height: 26px;
  margin-bottom: 8px;
}
.recommend-option li:last-child {
  margin-bottom: 0;
}
.recommend-option li a {
  display: inline-block;
  font-size: 14px;
  width: 100%;
  word-wrap: normal;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.recommend-option li a:hover {
  color: #fe6a00;
}
.recommend-option li a::before {
  content: "";
  background: #fe6a00;
  display: inline-block;
  width: 4px;
  height: 4px;
  margin-right: 8px;
  vertical-align: middle;
  border-radius: 50%;
}

.stealth-scroll {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  width: auto;
  height: auto;
  background: #fff;
}
.stealth-scroll-bar {
  display: -webkit-flex;
  -webkit-align-items: center;
  display: flex;
  align-items: center;
  /* display: block; */
  list-style: outside none none;
  /*overflow-x: auto;*/
  white-space: nowrap;
  padding: 10px 0 10px 5px;
  margin: 0;
  /***滚动条样式***/
  scrollbar-face-color: rgba(0, 0, 0, 0);
  scrollbar-highlight-color: rgba(0, 0, 0, 0);
  scrollbar-3dlight-color: rgba(0, 0, 0, 0.2);
  scrollbar-darkshadow-color: rgba(0, 0, 0, 0);
  scrollbar-shadow-color: rgba(0, 0, 0, 0);
  scrollbar-arrow-color: rgba(0, 0, 0, 0);
  scrollbar-track-color: rgba(0, 0, 0, 0);

  font-size: 16px;
}
.stealth-scroll-bar li {
  cursor: pointer;
  display: inline-block;
  position: relative;
  margin-right: 5px;
}
.stealth-scroll-bar span {
  font-size: 18px;
  padding: 0 3px;
}
.stealth-scroll-bar li a {
  margin: 0 5px 0 5px;
  color: #333;
}
.stealth-scroll-bar li.kr_active a {
  color: #fe6a00;
}
.header-logo .mobile-logo {
  display: inline-block;
  /* width: 4.8rem;
height: 0.9rem; */
  width: 8rem;
  height: 1.5rem;
  background: url(//7n.w3cschool.cn/statics/images/logonew2.png) no-repeat
    center center/contain;
}
@media (min-width: 1024px) {
  .stealth-scroll {
    display: none;
  }
}
@media (max-width: 1024px) {
  #header,
  .right-item,
  .side-widget-flexible,
  .feedback-btn,
  .hot-icon {
    display: none !important;
  }
  #m-splitter {
    overflow: hidden;
    padding-top: 37px;
  }
  #full-height-container .main-container #pcover {
    width: 95%;
  }
  #full-height-container .service-card {
    flex-direction: column;
  }
  #full-height-container .service-card .card-list {
    margin-bottom: 20px;
  }
  .left-container {
    bottom: 0;
    box-shadow: rgb(0 0 0 / 60%) 0px 2px 1px;
    width: 0;
  }
  .left-drager {
    display: none;
  }
  #pro-mian {
    width: 100%;
    margin-left: 0;
  }
  .set-btn-group {
    display: flex;
  }
  .content-intro .example {
    width: auto;
  }
  .portlet-title {
    position: initial;
    height: 0;
  }
  .group-wrap {
    position: fixed;
    top: 37px;
    left: 0;
    right: 0;
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    display: flex;
    justify-content: space-between;
    width: 100% !important;
    background: #fff;
    z-index: 11;
  }
  .content-links {
    display: -webkit-flex;
    -webkit-justify-content: space-between;
    display: flex;
    justify-content: space-between;
  }
  .recommend-footer {
    display: -webkit-flex;
    -webkit-flex-direction: column;
    display: flex;
    flex-direction: column;
  }
  .recommend-option {
    margin-bottom: 20px;
  }
  .splitter-sidebar {
    padding-top: 20px;
  }
}
@media (max-width: 968px) {
  #m-splitter {
    min-width: 375px;
    width: 100%;
  }
  #full-height-container .main-container #pcover {
    width: 100%;
  }
  #full-height-container .logrow {
    float: none;
    width: 100%;
  }
}
@media (max-width: 680px) {
  .kn-btn-group,
  .share-btn,
  .coverinfo-desc .lately-read {
    display: none;
  }
}
.closeifream {
  position: absolute;
  top: 0;
  right: -48px;
  z-index: 9999999;
  color: #fff;
  cursor: pointer;
}
</style>