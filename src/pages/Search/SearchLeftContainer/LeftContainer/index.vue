<template>
  <div class="m-splitter-left left-container">
    <div class="fixed-sidebar mscroller" style="width: 100%">
      <div class="splitter-sidebar">
        <div class="sidebar-space-info">
          <a href="/python3" title="Python3 教程">
            <div class="sidebar-pro-wrapper">
              <div class="sidebar-pro-container">
                <div class="sidebar-pro-img">
                  <span
                    ><img
                      class="pimg-cover"
                      alt="Python3 教程"
                      src="//atts.w3cschool.cn/attachments/cover/cover_python3.png?t=1666251302?imageView2/1/w/48/h/48"
                  /></span>
                </div>
              </div>
            </div>
            <div class="pro-name-container">
              <div class="sidebar-pro-name">
                <span>Python3 教程</span>
              </div>
            </div>
          </a>
        </div>
        <div class="sidebar-pro-nav">
          <ul class="page-sidebar-menu">
            <li class="pro-m">
              <a
                class="btn-thumbs-up"
                href="javascript:;"
                onclick="isProjectLike()"
              >
                <i class="icon-thumbs-up"></i>
                <span id="likestatus">赞</span>
              </a>
            </li>
            <li class="pro-m">
              <a
                id="hbstar"
                href="javascript:;"
                onclick="isProjectStar()"
                data-type="star"
                ><i class="icon-star-empty"></i> <span>收藏</span></a
              >
            </li>
            <!-- <li class="pro-m">
<a href="javascript:;" title="分享" class="share-btn  popup_more bdsharebuttonbox" data-cmd="more" data-bd-bind="1472196006351"><i class="icon-share"></i> 分享</a>
</li> -->
          </ul>
        </div>
        <div class="sidebar-menu">
          <ul>
            <li class="nav-item">
              <a href="/python3/list/" title="更多文章"
                ><i class="icon-bookmark-empty"></i>
                <span class="nav-item-label">更多文章</span></a
              >
            </li>
          </ul>
        </div>
        <!--左侧栏导航 start-->
        <div class="sidebar-nav">
          <ul class="treeth">
            <li class="active sidebar-nav-tree" target="sidebar-tree-content">
              <a href="javascript:;" class="text" title="目录"
                ><i class="icon icon-th-list"></i>
                <span class="title">目录</span></a
              >
            </li>
            <li class="sidebar-nav-search" target="search-box">
              <a href="javascript:;" class="text" title="搜索"
                ><i class="icon icon-search"></i>
                <span class="title">搜索</span></a
              >
            </li>
            <li class="sidebar-nav-star" target="stars-box">
              <a href="javascript:;" class="text" title="书签"
                ><i class="icon icon-bookmark"></i>
                <span class="title">书签</span></a
              >
            </li>
          </ul>
        </div>
        <!--左侧栏导航 end-->
        <div style="clear: both"></div>
        <!-- 开始树形结构 -->
        <div class="sidebar-content">
          <div class="sidebar-tree">
            <div class="sidebar-tree-content">
              <div
                class="dd"
                id="nestable_handbook"
                data-tid=""
                data-id="handbook"
              >
                <ol class="dd-list">
                  <li class="dd-item" data-id="python3-l4dz323g">
                    <div class="dd-content folder-open">
                      <i class="folder icon-folder-open"></i>
                      <a
                        href="/python3/python3-l4dz323g.html"
                        title="Python3 教程"
                        >Python3 教程</a
                      >
                    </div>
                    <ol class="dd-list">
                      <li class="dd-item" data-id="python3-tutorial">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="/python3/python3-tutorial.html"
                            title="Python3 教程"
                            >Python3 教程</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                      <li class="dd-item" data-id="python3-intro">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="/python3/python3-intro.html"
                            title="Python3 简介"
                            >Python3 简介</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                      <li class="dd-item" data-id="python3-examples">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="/python3/python3-examples.html"
                            title="Python3 实例"
                            >Python3 实例</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                      <li class="dd-item" data-id="python3-update">
                        <div class="dd-content folder-open">
                          <i class="folder icon-folder-open"></i>
                          <a title="Python3 历代版本更新"
                            >Python3 历代版本更新</a
                          >
                        </div>
                        <ol class="dd-list">
                          <li class="dd-item" data-id="python3-python310">
                            <div class="dd-content">
                              <i class="ic-folder-open2"></i>
                              <a
                                href="/python3/python3-python310.html"
                                title="Python3.10更新"
                                >Python3.10更新</a
                              >
                            </div>
                            <ol class="dd-list"></ol>
                          </li>
                          <li class="dd-item" data-id="python3-lfy73lto">
                            <div class="dd-content">
                              <i class="ic-folder-open2"></i>
                              <a
                                href="/python3/python3-lfy73lto.html"
                                title="Python3.11更新"
                                >Python3.11更新</a
                              >
                            </div>
                            <ol class="dd-list"></ol>
                          </li>
                          <li class="dd-item" data-id="python-python38">
                            <div class="dd-content">
                              <i class="ic-folder-open2"></i>
                              <a
                                href="/python3/python-python38.html"
                                title="python3.9更新"
                                >python3.9更新</a
                              >
                            </div>
                            <ol class="dd-list"></ol>
                          </li>
                        </ol>
                      </li>
                    </ol>
                  </li>
                  <li class="dd-item" data-id="python3-thz7323h">
                    <div class="dd-content folder-open">
                      <i class="folder icon-folder-open"></i>
                      <a title="Python3 高级教程">Python3 高级教程</a>
                    </div>
                    <ol class="dd-list">
                      <li class="dd-item" data-id="python3-reg-expressions">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="/python3/python3-reg-expressions.html"
                            title="Python3 正则表达式"
                            >Python3 正则表达式</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                      <li class="dd-item" data-id="python3-cgi-programming">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="/python3/python3-cgi-programming.html"
                            title="Python3 CGI 编程"
                            >Python3 CGI 编程</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                      <li class="dd-item" data-id="python3-mysql">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="/python3/python3-mysql.html"
                            title="Python3 MySQL 数据库连接"
                            >Python3 MySQL 数据库连接</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                    </ol>
                  </li>
                  <li class="dd-item" data-id="python3-v7hz3osl">
                    <div class="dd-content folder-open">
                      <i class="folder icon-folder-open"></i>
                      <a title="Python 技术专题">Python 技术专题</a>
                    </div>
                    <ol class="dd-list">
                      <li class="dd-item" data-id="python3-mxvb3osm">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="/python3/python3-mxvb3osm.html"
                            title="python 解决pip下载缓慢的方法"
                            >python 解决pip下载缓慢的方法</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                      <li class="dd-item" data-id="python3-rsxk3oso">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="/python3/python3-rsxk3oso.html"
                            title="python 怎么使用pip进行包管理"
                            >python 怎么使用pip进行包管理</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                    </ol>
                  </li>
                  <li class="dd-item" data-id="python3-ev7r3e1q">
                    <div class="dd-content folder-open">
                      <i class="folder icon-folder-open"></i>
                      <a title="相关教程">相关教程</a>
                    </div>
                    <ol class="dd-list">
                      <li class="dd-item" data-id="python3-7dgf3e1s">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="https://www.w3cschool.cn/python/"
                            title="Python2 教程"
                            >Python2 教程</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                    </ol>
                  </li>
                  <li class="dd-item" data-id="python3-fzew3pf1">
                    <div class="dd-content">
                      <i class="folder icon-folder-open"></i>
                      <a title="python内置库">python内置库</a>
                    </div>
                    <ol class="dd-list"></ol>
                  </li>
                </ol>
              </div>
            </div>
            <!--  sidebar-tree-content end  -->
            <div class="search-box hide1">
              <div id="knsearch" class="tab-pane">
                <div class="knsearch-input">
                  <input
                    type="text"
                    placeholder="搜索手册内容"
                    name="w"
                    class="input-s"
                  />
                  <button class="knsearchbtn">搜索</button>
                  <!--<button class="kncleanbtn">清空</button>-->
                </div>
                <div class="searchres"></div>
                <div class="sidebar-tree-dict"></div>
              </div>
            </div>
            <div class="stars-box hide1">
              <div id="kncollect" class="tab-pane">
                <ul class="dd-list">
                  <li class="nostar"></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="space-tools-section">
<div class="tools-button">
<a href="" class="expand-collapse-trigger"></a>
</div>
</div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "LeftContainer",
};
</script>

<style>
</style>