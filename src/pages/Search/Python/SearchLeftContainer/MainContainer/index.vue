<template>
  <div id="pro-mian" class="main-container font0">
    <!-- 教程封面页 -->
    <PortletTitle />
    <div class="project-cover">
      <div id="pcover">
        <div class="portlet">
          <div class="coverimg">
            <a href="//www.w3cschool.cn/python3" title="Python3 教程">
              <img
                class="pimgcover"
                src="//atts.w3cschool.cn/attachments/cover/cover_python3.png?t=1666251302&imageView2/1/w/150/h/84"
                alt="Python3 教程"
              />
            </a>
          </div>
          <div class="coverinfo">
            <h1>Python3 教程</h1>
            <br />
            <div class="coverinfo-desc">
              <div class="content-btn-group cover-btn-group">
                <span id="content-head-viewcount" class="content-head-viewcount"
                  ><i class="icon-eye-open"></i>
                  <span>阅读(5546.6k)</span></span
                >
                <a
                  class="hbstar"
                  href="javascript:;"
                  onclick="isProjectStar()"
                  data-type="star"
                  ><i class="icon-star"></i> <span>收藏</span></a
                >
                <a
                  class="btn-thumbs-up"
                  href="javascript:;"
                  onclick="isProjectLike()"
                  ><i class="icon-thumbs-up"></i>
                  <span id="likestatus">赞</span>(<span id="likecount">709</span
                  >)</a
                >
                <a
                  href="javascript:;"
                  title="分享"
                  class="share-btn popup_more bdsharebuttonbox"
                  data-cmd="more"
                  ><i class="icon-share"></i> 分享</a
                >
              </div>
            </div>
          </div>
        </div>
        <!-- 手册简介 -->
        <div class="project-desc content-intro">
          <h4><i class="icon-reorder"></i>手册简介</h4>
          <p>Python3.x版本，未来主流的版本。</p>
        </div>
        <!-- 手册说明 -->
        <div class="project-desc content-intro">
          <h4 class="project-desc-title">
            <i class="icon-reorder"></i>手册说明
          </h4>
          <div class="project-desc-content">
            <p style="text-align: center">
              <img
                src="https://www.w3cschool.cn/attachments/image/20161031/1477907822466420.png"
              />
              <br />
            </p>
            <p>
              Python（英国发音：/ˈpaɪθən/ 美国发音：/ˈpaɪθɑːn/）,
              是一种面向对象的解释型计算机程序设计语言，由荷兰人Guido van
              Rossum于1989年发明，第一个公开发行版发行于1991年。
              <br />
            </p>
            <p>
              如果您想要更快、更系统地学会Python，您最好采用边学边练（<a
                href="https://www.w3cschool.cn/minicourse/play/python3course?cp=380"
                target="_blank"
                ><b>Python微课</b></a
              >）的学习模式。
              <br />
            </p>
            <p>
              如果您觉得Python的学习难度较高，不易理解，建议您采用视频教程进行学习：<b
                ><a
                  href="https://www.w3cschool.cn/minicourse/play/python_rygh"
                  target="_blank"
                  >Python视频课程</a
                ></b
              >&nbsp;
            </p>
            <p>
              <br />
            </p>
          </div>
        </div>
        <!-- 更新记录 推荐课程 -->
        <div class="project-desc2 clearfix">
          <h4><i class="icon-reorder"></i>更新记录</h4>
          <ul class="portlet-body logbody">
            <li class="logrow" v-for="item in logrow" :key="item.id">
              <div class="loginfo">
                <a :href="item.href" :title="item.title">{{item.name}}</a>
                <span class="logtime">{{item.logtime}}</span>
              </div>
            </li>
          </ul>
        </div>
        <!-- 多端阅读 -->
        <div class="project-desc2">
          <h4><i class="icon-reorder"></i>多端阅读</h4>
          <ul class="service-card">
            <li class="card-list">
              <a
                href="//www.w3cschool.cn/download/python3.html#downloadpc"
                target="_blank"
                title="下载Python3 教程离线版"
                class="card-list-link"
              >
                <div class="card-list-icon">
                  <i class="i-icon i-icon iconpc"></i>
                </div>
                <div class="card-list-title">
                  在PC/MAC上查看《Python3 教程》
                </div>
                <div class="card-list-desc">
                  <span class="highlight-text"
                    >下载Python3 教程离线版客户端</span
                  >，进入客户端后通过搜索当前教程手册的名称并下载，就可查看当前离线教程文档。
                </div>
              </a>
            </li>
            <li class="card-list">
              <a
                href="//m.w3cschool.cn/python3/"
                target="_blank"
                title="Python3 教程 移动端阅读"
                class="card-list-link"
              >
                <div class="card-list-icon">
                  <i class="i-icon i-icon-device-pad"></i>
                </div>
                <div class="card-list-title">在手机上查看《Python3 教程》</div>
                <div class="card-list-desc">
                  点击链接
                  <span class="highlight-text"
                    >https://m.w3cschool.cn/python3/</span
                  >
                  就可直接查看当前离线教程文档。
                </div>
              </a>
            </li>
            <li class="card-list">
              <a
                href="//www.w3cschool.cn/download/#downloadapp"
                target="_blank"
                title="下载w3cschool手机版"
                class="card-list-link"
              >
                <div class="card-list-icon">
                  <i class="i-icon i-icon-device-mobile"></i>
                </div>
                <div class="card-list-title">
                  在手机APP上查看《Python3 教程》
                </div>
                <div class="card-list-desc">
                  <span class="highlight-text">下载w3cschool手机App端</span
                  >，请从各大安卓应用商店、苹果App
                  Store搜索并下载w3cschool手机客户端，在App中搜索当前教程手册的名称查看。
                </div>
              </a>
            </li>
          </ul>
        </div>

        <div class="project-cover-footer">
          <p>返回<a href="//www.w3cschool.cn/">w3cschool</a>官网主页</p>
        </div>
      </div>
      <!-- 右侧 -->
      <div class="right-item">
        <!-- 扩展栏目 -->
        <ToolsBox />
        <!--竖版广告放置-->
        <AboxItem />
        <!--分类导航-->
        <!--siderbar_nav start-->
        <SidebarBox />
        <!--siderbar_nav end-->
      </div>
    </div>
  </div>
</template>

<script>
import PortletTitle from "./PortletTitle";
import ToolsBox from "./ToolsBox";
import AboxItem from "./AboxItem";
import SidebarBox from "./SidebarBox"
export default {
  name: "MainContainer",
  data() {
    return {
      logrow:[
        {
          "id":1,
          "href":"/python3/python3-intro.html",
          "title":"Python3 简介",
          "name":"Python3 简介",
          "logtime":"12-31 20:05"
        },
        {
          "id":2,
          "href":"/python3/python3-intro.html",
          "title":"Python3 安装",
          "name":"Python3 安装",
          "logtime":"12-31 20:05"
        },
        {
          "id":3,
          "href":"/python3/python3-intro.html",
          "title":"Python3 内置函数",
          "name":"Python3 内置函数",
          "logtime":"12-31 20:05"
        },
        {
          "id":4,
          "href":"/python3/python3-intro.html",
          "title":"python3.9更新",
          "name":"python3.9更新",
          "logtime":"12-31 20:05"
        },
        {
          "id":5,
          "href":"/python3/python3-intro.html",
          "title":"Python3 元组",
          "name":"Python3 元组",
          "logtime":"12-31 20:05"
        },
        {
          "id":6,
          "href":"/python3/python3-intro.html",
          "title":"Python3 数字",
          "name":"Python3 数字",
          "logtime":"12-31 20:05"
        },
        {
          "id":7,
          "href":"/python3/python3-intro.html",
          "title":"Python3 序列",
          "name":"Python3 序列",
          "logtime":"12-31 20:05"
        },
        {
          "id":8,
          "href":"/python3/python3-intro.html",
          "title":"Python3 正则表达式",
          "name":"Python3 正则表达式",
          "logtime":"12-31 20:05"
        },
        {
          "id":9,
          "href":"/python3/python3-intro.html",
          "title":"Python3 运算符",
          "name":"Python3 运算符",
          "logtime":"12-31 20:05"
        },
        {
          "id":10,
          "href":"/python3/python3-intro.html",
          "title":"Python3 教程",
          "name":"Python3 教程",
          "logtime":"12-31 20:05"
        }
      ]
    }
  },
  components:{
    PortletTitle,
    ToolsBox,
    AboxItem,
    SidebarBox
  }
};
</script>

<style>
</style>