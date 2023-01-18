<template>
  <div id="pro-mian" class="main-container font0">
    <!-- 教程封面页 -->
    <div class="portlet-title pro-title">
      <div class="group-wrap">
        <div class="set-btn-group font-settings pull-left">
          <a href="#" class="expand-collapse-trigger" title="折叠/展开"
            ><i class="icon-th-list"></i
          ></a>
          <a href="#" class="toggle-dropdown-size" title="字体大小设置"
            ><i class="icon-font"></i
          ></a>
          <a href="#" class="toggle-dropdown-background" title="夜间模式"
            ><i class="w3c-icon w3c-icon-night" style="display: contents"></i
          ></a>
          <!-- 视觉主题字体大小设置 -->
          <div class="set-dropdown-menu set-size docblur" style="display: none">
            <div class="dropdown-caret">
              <span class="caret-outer"></span>
              <span class="caret-inner"></span>
            </div>
            <div class="buttons font-opt">
              <button
                class="button size font-reduce"
                font="reduce"
                title="缩小字体"
              >
                A
              </button>
              <button
                class="button size font-enlarge"
                font="enlarge"
                title="放大字体"
              >
                A
              </button>
            </div>
          </div>
          <!-- 视觉主题背景颜色设置 -->
          <div class="set-dropdown-menu set-background docblur">
            <div class="dropdown-caret">
              <span class="caret-outer"></span>
              <span class="caret-inner"></span>
            </div>
            <div class="buttons bg-color">
              <button
                class="button theme background-day"
                color="color-theme-white"
                title="默认模式"
              >
                默认
              </button>
              <button
                class="button theme background-night"
                color="color-theme-night"
                title="夜间模式"
              >
                夜间
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
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
            <!-- <div class="creatorarea">
<a href="javascript:;" target="_blank">
<img class="pavatar" src="https://7n.w3cschool.cn/attachments/avatar2/avatar_22413.jpg" /> 
rowline</a>
</div> -->
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
                <!-- <a title="请将此链接拖拽到书签栏" class="pagecollect" onclick="alert('请将此链接拖拽到书签栏')" href="javascript:(function(){CLIP_HOST='//www.w3cschool.cn/statics/js/w3cdoc.min.js';%20try{var%20x=document.createElement('SCRIPT');%20x.type='text/javascript';%20x.src=CLIP_HOST+'?'+(new%20Date().getTime()/100000);%20x.charset='utf-8';document.getElementsByTagName('head')[0].appendChild(x);%20}catch(e){alert(e);}%20})();" id="add-btn"><i class="icon-cut"></i> 网页剪辑器</a> -->
              </div>
            </div>
          </div>
        </div>
        <div class="project-desc content-intro">
          <h4><i class="icon-reorder"></i>手册简介</h4>
          <p>Python3.x版本，未来主流的版本。</p>
        </div>
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
        <!-- 推荐课程 -->
        <div class="project-desc2 clearfix">
          <h4><i class="icon-reorder"></i>更新记录</h4>
          <ul class="portlet-body logbody">
            <li class="logrow">
              <div class="loginfo">
                <a href="/python3/python3-intro.html" title="Python3 简介"
                  >Python3 简介</a
                >
                <span class="logtime">12-31 20:05</span>
              </div>
            </li>
            <li class="logrow">
              <div class="loginfo">
                <a href="/python3/python3-install.html" title="Python3 安装"
                  >Python3 安装</a
                >
                <span class="logtime">10-27 16:28</span>
              </div>
            </li>
            <li class="logrow">
              <div class="loginfo">
                <a
                  href="/python3/python3-built-in-functions.html"
                  title="Python3 内置函数"
                  >Python3 内置函数</a
                >
                <span class="logtime">10-26 09:42</span>
              </div>
            </li>
            <li class="logrow">
              <div class="loginfo">
                <a href="/python3/python-python38.html" title="python3.9更新"
                  >python3.9更新</a
                >
                <span class="logtime">10-26 09:42</span>
              </div>
            </li>
            <li class="logrow">
              <div class="loginfo">
                <a href="/python3/python3-tuple.html" title="Python3 元组"
                  >Python3 元组</a
                >
                <span class="logtime">10-26 09:34</span>
              </div>
            </li>
            <li class="logrow">
              <div class="loginfo">
                <a href="/python3/python3-number.html" title="Python3 数字"
                  >Python3 数字</a
                >
                <span class="logtime">10-26 09:33</span>
              </div>
            </li>
            <li class="logrow">
              <div class="loginfo">
                <a href="/python3/python3-sequence.html" title="Python3 序列"
                  >Python3 序列</a
                >
                <span class="logtime">10-26 09:26</span>
              </div>
            </li>
            <li class="logrow">
              <div class="loginfo">
                <a
                  href="/python3/python3-reg-expressions.html"
                  title="Python3 正则表达式"
                  >Python3 正则表达式</a
                >
                <span class="logtime">09-17 17:10</span>
              </div>
            </li>
            <li class="logrow">
              <div class="loginfo">
                <a
                  href="/python3/python3-basic-operators.html"
                  title="Python3 运算符"
                  >Python3 运算符</a
                >
                <span class="logtime">09-05 09:14</span>
              </div>
            </li>
            <li class="logrow">
              <div class="loginfo">
                <a href="/python3/python3-tutorial.html" title="Python3 教程"
                  >Python3 教程</a
                >
                <span class="logtime">07-28 10:23</span>
              </div>
            </li>
          </ul>
        </div>
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
      <div class="right-item">
        <div class="sidebar-box tools-box">
          <div id="course">
            <h2>扩展栏目</h2>
          </div>
          <div id="tools">
            <h5 id="tools_3">
              <a href="/python/index.html" target="_blank" title="Python教程"
                >Python教程</a
              >
            </h5>
            <h5 id="tools_1"><a href="/webide">开发工具IDE</a></h5>
            <h5 id="tools_3"><a href="/codecamp/">编程训练营</a></h5>
            <h5 id="tools_1"><a href="/python3/list/">Wiki列表</a></h5>
          </div>
        </div>
        <!--竖版广告放置-->
        <div class="abox-item">
          <div class="sidebar-box">
            <div class="abox">
              <a
                href="https://www.w3cschool.cn/minicourse/play/python3course?"
                target="_blank"
                ><img src="./images/1556162304623142.png" alt="python3微课"
              /></a>
            </div>
          </div>
        </div>
        <!--分类导航-->
        <!--siderbar_nav start-->
        <div class="sidebar-box">
          <div id="course">
            <h2>分类导航</h2>
          </div>
          <ul class="nav1">
            <li class="li1">
              <a href="javascript:;">最新推荐</a>
              <ul class="nav2">
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/freejquery/index.html"
                    title="免费Jquery插件合集"
                    >免费Jquery插件合集</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/plk2fi/index.html"
                    title="前端学习资源汇总"
                    >前端学习资源汇总</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/wxxcx/index.html"
                    title="微信小程序资源汇总"
                    >微信小程序资源汇总</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/smarty/index.html"
                    title="Smarty教程"
                    >Smarty教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/kfm2f1/index.html"
                    title="SEO基础知识教程"
                    >SEO基础知识教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/wkspring/index.html"
                    title="Spring 教程"
                    >Spring 教程</a
                  >
                </li>
              </ul>
            </li>
            <li class="li1">
              <a href="javascript:;">HTML/CSS</a>
              <ul class="nav2">
                <li class="li2">
                  <a href="//www.w3cschool.cn/html/index.html" title="HTML教程"
                    >HTML教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/html5/index.html"
                    title="HTML5教程"
                    >HTML5教程</a
                  >
                </li>
                <li class="li2">
                  <a href="//www.w3cschool.cn/css/index.html" title="CSS教程"
                    >CSS教程</a
                  >
                </li>
                <li class="li2">
                  <a href="//www.w3cschool.cn/css3/index.html" title="CSS3教程"
                    >CSS3教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/bootstrap/index.html"
                    title="Bootstrap教程"
                    >Bootstrap教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/foundation/index.html"
                    title="Foundation5 教程"
                    >Foundation5 教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/htmltags/index.html"
                    title="HTML参考手册"
                    >HTML参考手册</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/cssref/index.html"
                    title="CSS参考手册"
                    >CSS参考手册</a
                  >
                </li>
              </ul>
            </li>
            <li class="li1">
              <a href="javascript:;">JavaScript</a>
              <ul class="nav2">
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/javascript/index.html"
                    title="JavaScript教程"
                    >JavaScript教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/jquery/index.html"
                    title="jQuery教程"
                    >jQuery教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/jsref/index.html"
                    title="JavaScript 和 HTML DOM 参考手册"
                    >JavaScript 和 HTML DOM 参考手册</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/nodejs/index.html"
                    title="Node.js教程"
                    >Node.js教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/aekdgs/index.html"
                    title="Vue 手册"
                    >学习 Vue</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/react/index.html"
                    title="React 教程"
                    >React 教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/angularjs/index.html"
                    title="AngularJS教程"
                    >AngularJS教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/typescript/index.html"
                    title="TypeScript 教程"
                    >TypeScript 教程</a
                  >
                </li>
                <li class="li2">
                  <a href="//www.w3cschool.cn/json/index.html" title="JSON教程"
                    >JSON教程</a
                  >
                </li>
                <li class="li2">
                  <a href="//www.w3cschool.cn/ajax/index.html" title="AJAX教程"
                    >AJAX教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/ecmascript/index.html"
                    title="ECMAScript教程"
                    >ECMAScript教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/angular2/index.html"
                    title="Angular2教程"
                    >Angular2教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/jqueryui/index.html"
                    title="jQuery UI教程"
                    >jQuery UI教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/jqueryeasyui/index.html"
                    title="jQuery EasyUI教程"
                    >jQuery EasyUI教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/extjs/index.html"
                    title="Extjs 教程"
                    >Extjs 教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/emberjs_guide/index.html"
                    title="Ember.js参考文档"
                    >Ember.js参考文档</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/htmldom/index.html"
                    title="HTML DOM教程"
                    >HTML DOM教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/coffeescript/index.html"
                    title="CoffeeScript教程"
                    >CoffeeScript教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/highcharts/index.html"
                    title="Highcharts教程"
                    >Highcharts教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/discovermeteor/index.html"
                    title="Meteor 教程"
                    >Meteor 教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/vuejs/index.html"
                    title="Vue.js 教程"
                    >Vue.js 教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/vuejs2/index.html"
                    title="Vue.js 2.0 教程"
                    >Vue.js 2.0 教程</a
                  >
                </li>
              </ul>
            </li>
            <li class="li1">
              <a href="javascript:;">后端语言</a>
              <ul class="nav2">
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/python/index.html"
                    title="Python基础教程"
                    >Python基础教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/python3/index.html"
                    title="Python 3教程"
                    >Python 3教程</a
                  >
                </li>
                <li class="li2">
                  <a href="//www.w3cschool.cn/java/index.html" title="Java教程"
                    >Java教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/nodejs/index.html"
                    title="Node.js教程"
                    >Node.js教程</a
                  >
                </li>
                <li class="li2">
                  <a href="//www.w3cschool.cn/php/index.html" title="PHP教程"
                    >PHP教程</a
                  >
                </li>
                <li class="li2">
                  <a href="//www.w3cschool.cn/c/index.html" title="C教程"
                    >C教程</a
                  >
                </li>
                <li class="li2">
                  <a href="//www.w3cschool.cn/cpp/index.html" title="C++教程"
                    >C++教程</a
                  >
                </li>
                <li class="li2">
                  <a href="//www.w3cschool.cn/csharp/index.html" title="C#教程"
                    >C#教程</a
                  >
                </li>
                <li class="li2">
                  <a href="//www.w3cschool.cn/go/index.html" title="Go教程"
                    >Go教程</a
                  >
                </li>
                <li class="li2">
                  <a href="//www.w3cschool.cn/r/index.html" title="R语言教程"
                    >R语言教程</a
                  >
                </li>
                <li class="li2">
                  <a href="//www.w3cschool.cn/ruby/index.html" title="Ruby教程"
                    >Ruby教程</a
                  >
                </li>
                <li class="li2">
                  <a href="//www.w3cschool.cn/jsp/index.html" title="JSP教程"
                    >JSP教程</a
                  >
                </li>
                <li class="li2">
                  <a href="//www.w3cschool.cn/lua/index.html" title="Lua教程"
                    >Lua教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/aspnet/index.html"
                    title="ASP.NET教程"
                    >ASP.NET教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/vbscript/index.html"
                    title="VBScript教程"
                    >VBScript教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/vb_net/index.html"
                    title="vb.net教程"
                    >vb.net教程</a
                  >
                </li>
                <li class="li2">
                  <a href="//www.w3cschool.cn/perl/index.html" title="Perl 教程"
                    >Perl 教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/erlang/index.html"
                    title="Erlang 教程"
                    >Erlang 教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/scala/index.html"
                    title="Scala教程"
                    >Scala教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/julia/index.html"
                    title="Julia教程"
                    >Julia教程</a
                  >
                </li>
              </ul>
            </li>
            <li class="li1">
              <a href="javascript:;">开发框架</a>
              <ul class="nav2">
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/django/index.html"
                    title="Django教程"
                    >Django教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/jfinal/index.html"
                    title="JFinal教程手册"
                    >JFinal教程手册</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/swoole/index.html"
                    title="Swoole 教程"
                    >Swoole 教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/groovy/index.html"
                    title="Groovy教程"
                    >Groovy教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/wkspring/index.html"
                    title="Spring 教程"
                    >Spring 教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/servlet/index.html"
                    title="Servlet教程"
                    >Servlet教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/struts_2/index.html"
                    title="Struts2教程"
                    >Struts2教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/junit/index.html"
                    title="jUnit教程"
                    >jUnit教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/revel/index.html"
                    title="Revel教程"
                    >Revel教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/swing/index.html"
                    title="SWING 教程"
                    >SWING 教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/wordpress/index.html"
                    title="WordPress教程"
                    >WordPress教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/arduino/index.html"
                    title="Arduino教程"
                    >Arduino教程</a
                  >
                </li>
              </ul>
            </li>
            <li class="li1">
              <a href="javascript:;">数据库</a>
              <ul class="nav2">
                <li class="li2">
                  <a href="//www.w3cschool.cn/sql/index.html" title="SQL教程"
                    >SQL教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/mysql/index.html"
                    title="MySQL 教程"
                    >MySQL 教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/mariadb/index.html"
                    title="MariaDB教程"
                    >MariaDB教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/mybatis/index.html"
                    title="MyBatis 教程"
                    >MyBatis 教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/sqlite/index.html"
                    title="SQLite教程"
                    >SQLite教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/ms_access/index.html"
                    title="MS Access教程"
                    >MS Access教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/mongodb/index.html"
                    title="MongoDB教程"
                    >MongoDB教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/redis/index.html"
                    title="Redis教程"
                    >Redis教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/memcached/index.html"
                    title="Memcached教程"
                    >Memcached教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/hibernate/index.html"
                    title="Hibernate 教程"
                    >Hibernate 教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/storm/index.html"
                    title="Storm 入门教程"
                    >Storm 入门教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/cassandra/index.html"
                    title="Cassandra教程"
                    >Cassandra教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/slickguide/index.html"
                    title="Slick 教程"
                    >Slick 教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/spark/index.html"
                    title="Spark 编程指南"
                    >Spark 编程指南</a
                  >
                </li>
              </ul>
            </li>
            <li class="li1">
              <a href="javascript:;">移动开发</a>
              <ul class="nav2">
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/android/index.html"
                    title="Android 教程"
                    >Android 教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/android_sdk/index.html"
                    title="Android SDK上手指南"
                    >Android SDK上手指南</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/weixinapp/index.html"
                    title="微信小程序开发文档"
                    >微信小程序开发文档</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/jquerymobile/index.html"
                    title="jQuery Mobile教程"
                    >jQuery Mobile教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/ios/index.html"
                    title="iOS开发手册"
                    >iOS开发手册</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/swift/index.html"
                    title="Swift 教程"
                    >Swift 教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/cordova/index.html"
                    title="Cordova教程"
                    >Cordova教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/crossapp/index.html"
                    title="CrossApp教程"
                    >CrossApp教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/react/index.html"
                    title="React 教程"
                    >React 教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/ionic/index.html"
                    title="ionic 教程"
                    >ionic 教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/homekit/index.html"
                    title="HomeKit App 的开发指南"
                    >HomeKit App 的开发指南</a
                  >
                </li>
              </ul>
            </li>
            <li class="li1">
              <a href="javascript:;">服务器相关</a>
              <ul class="nav2">
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/linux/index.html"
                    title="Linux教程"
                    >Linux教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/docker/index.html"
                    title="Docker教程"
                    >Docker教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/reqsgr/index.html"
                    title="Docker从入门到实践"
                    >Docker从入门到实践</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/dosmlxxsc1/index.html"
                    title="DOS命令学习手册"
                    >DOS命令学习手册</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/unix/index.html"
                    title="UNIX 入门指南"
                    >UNIX 入门指南</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/nginx/index.html"
                    title="Nginx 入门指南"
                    >Nginx 入门指南</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/shellbook/index.html"
                    title="Shell 编程范例"
                    >Shell 编程范例</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/oauth2/index.html"
                    title="OAuth 2.0系列教程"
                    >OAuth 2.0系列教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/webservices/index.html"
                    title="Web Services教程"
                    >Web Services教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/dartstyleguide/index.html"
                    title="Dart 编码风格指南"
                    >Dart 编码风格指南</a
                  >
                </li>
                <li class="li2">
                  <a href="//www.w3cschool.cn/rdf/index.html" title="RDF教程"
                    >RDF教程</a
                  >
                </li>
              </ul>
            </li>
            <li class="li1">
              <a href="javascript:;">开发工具</a>
              <ul class="nav2">
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/eclipse/index.html"
                    title="Eclipse教程"
                    >Eclipse教程</a
                  >
                </li>
                <li class="li2">
                  <a href="//www.w3cschool.cn/git/index.html" title="Git教程"
                    >Git教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/ant/index.html"
                    title="Apache Ant 教程"
                    >Apache Ant 教程</a
                  >
                </li>
                <li class="li2">
                  <a href="//www.w3cschool.cn/atom/index.html" title="Atom教程"
                    >Atom教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/sublimetext/index.html"
                    title="Sublime Text 使用手册"
                    >Sublime Text 使用手册</a
                  >
                </li>
                <li class="li2">
                  <a href="//www.w3cschool.cn/vim/index.html" title="Vim 教程"
                    >Vim 教程</a
                  >
                </li>
                <li class="li2">
                  <a href="//www.w3cschool.cn/svn/index.html" title="SVN 教程"
                    >SVN 教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/firebug/index.html"
                    title="Firebug教程"
                    >Firebug教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/composer/index.html"
                    title="Composer 教程"
                    >Composer 教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/codesmith/index.html"
                    title="CodeSmith教程"
                    >CodeSmith教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/electronmanual/index.html"
                    title="Electron 中文文档"
                    >Electron 中文文档</a
                  >
                </li>
                <li class="li2">
                  <a href="//www.w3cschool.cn/flex/index.html" title="Flex教程"
                    >Flex教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/gradle/index.html"
                    title="Gradle教程"
                    >Gradle教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/grunt/index.html"
                    title="Grunt 教程"
                    >Grunt 教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/bhz24q/index.html"
                    title="HBuilder 使用教程"
                    >HBuilder 使用教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/maven/index.html"
                    title="Maven 教程"
                    >Maven 教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/tableau/index.html"
                    title="Tableau教程"
                    >Tableau教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/chromedevtools/index.html"
                    title="Chrome 开发工具指南"
                    >Chrome 开发工具指南</a
                  >
                </li>
              </ul>
            </li>
            <li class="li1">
              <a href="javascript:;">大数据</a>
              <ul class="nav2">
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/apache_pig/index.html"
                    title="Apache Pig教程"
                    >Apache Pig教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/apache_kafka/index.html"
                    title="Apache Kafka 教程"
                    >Apache Kafka 教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/apache_storm/index.html"
                    title="Apache Storm教程"
                    >Apache Storm教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/hadoop/index.html"
                    title="Hadoop教程"
                    >Hadoop教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/impala/index.html"
                    title="impala教程"
                    >impala教程</a
                  >
                </li>
                <li class="li2">
                  <a
                    href="//www.w3cschool.cn/zookeeper/index.html"
                    title="Zookeeper教程"
                    >Zookeeper教程</a
                  >
                </li>
                <li class="li2">
                  <a href="//www.w3cschool.cn/sas/index.html" title="SAS教程"
                    >SAS教程</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <!--siderbar_nav end-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainContainer",
};
</script>

<style>
</style>