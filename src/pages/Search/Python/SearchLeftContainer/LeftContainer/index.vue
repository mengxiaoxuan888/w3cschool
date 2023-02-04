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
        <!--赞，收藏-->
        <!-- <div class="sidebar-pro-nav">
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
          </ul>
        </div> -->
        <!--更多文章-->
        <!-- <div class="sidebar-menu">
          <ul>
            <li class="nav-item">
              <a href="/python3/list/" title="更多文章"
                ><i class="icon-bookmark-empty"></i>
                <span class="nav-item-label">更多文章</span></a
              >
            </li>
          </ul>
        </div> -->
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
              <div class="dd" id="nestable_handbook" data-tid="" data-id="handbook">
                <ol class="dd-list">
                  <li class="dd-item" v-for="item in sidebarTreeItem" :key="item.id" :data-id="item.dataId" >
                    <div class="dd-content folder-open">
                      <i class="folder icon-folder-open"></i>
                      <a :href="item.href" :title="item.title">{{item.name}}</a>
                    </div>
                    <ol class="dd-list">
                      <li class="dd-item" v-for="list in item.childrens" :key="list.id" :data-id="list.dataId">
                        <div class="dd-content folder-open">
                          <i class="folder icon-folder-open"></i>
                          <a :href="list.href" :title="list.title">{{list.name}}</a>
                        </div>
                        <ol class="dd-list" v-if="list.childrens">
                          <li class="dd-item" v-for="l in list.childrens" :key="l.id" :data-id="l.dataId">
                            <div class="dd-content">
                              <i class="ic-folder-open2"></i>
                              <a :href="l.href" :title="l.title">{{l.name}}</a>
                            </div>
                            <ol class="dd-list"></ol>
                          </li>
                        </ol>
                      </li>
                    </ol>
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
  data() {
    return {
      sidebarTreeItem:[
        {
          "id":1,
          "dataId":"python3-l4dz323g",
          "href":"/python3/python3-l4dz323g.html",
          "title":"Python3 教程",
          "name":"Python3 教程",
          "childrens":[
            {
              "id":1,
              "dataId":"python3-tutorial",
              "href":"/python3/python3-tutorial.html",
              "title":"Python3 教程",
              "name":"Python3 教程",
              "childrens":[]
            },
            {
              "id":2,
              "dataId":"python3-examples",
              "href":"/python3/python3-examples.html",
              "title":"Python3 实例",
              "name":"Python3 实例",
              "childrens":[]
            },
            {
              "id":3,
              "dataId":"python3-update",
              "href":"#",
              "title":"Python3 历代版本更新",
              "name":"Python3 历代版本更新",
              "childrens":[
                {
                  "id":1,
                  "dataId":"python3-python310",
                  "href":"/python3/python3-python310.html",
                  "title":"Python3.10更新",
                  "name":"Python3.10更新",
                },
                {
                  "id":2,
                  "dataId":"python-python38",
                  "href":"/python3/python-python38.html",
                  "title":"python3.9更新",
                  "name":"python3.9更新",
                },
              ]
            },
          ]
        },
        {
          "id":2,
          "dataId":"python3-thz7323h",
          "href":"#",
          "title":"Python3 高级教程",
          "name":"Python3 高级教程",
          "childrens":[
            {
              "id":1,
              "dataId":"python3-reg-expressions",
              "href":"/python3/python3-reg-expressions.html",
              "title":"Python3 正则表达式",
              "name":"Python3 正则表达式",
              "childrens":[]
            },
            {
              "id":2,
              "dataId":"python3-cgi-programming",
              "href":"/python3/python3-cgi-programming.html",
              "title":"Python3 CGI 编程",
              "name":"Python3 CGI 编程",
              "childrens":[]
            },
          ]
        },
        {
          "id":3,
          "dataId":"python3-fzew3pf1",
          "href":"#",
          "title":"python内置库",
          "name":"python内置库",
          "childrens":[]
        },
      ]
    }
  },
};
</script>

<style>
</style>