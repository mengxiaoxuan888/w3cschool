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
                      <li class="dd-item" data-id="python3-install">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="/python3/python3-install.html"
                            title="Python3 安装"
                            >Python3 安装</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                      <li class="dd-item" data-id="python3-use">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="/python3/python3-use.html"
                            title="Python3 使用上手"
                            >Python3 使用上手</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                      <li class="dd-item" data-id="python3-interpreter">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="/python3/python3-interpreter.html"
                            title="Python3 解释器"
                            >Python3 解释器</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                      <li class="dd-item" data-id="python3-vscode">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="/python3/python3-vscode.html"
                            title="Python3 VSCode 配置"
                            >Python3 VSCode 配置</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                      <li class="dd-item" data-id="python3-basic-syntax">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="/python3/python3-basic-syntax.html"
                            title="Python3 基础语法"
                            >Python3 基础语法</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                      <li class="dd-item" data-id="python3-step1">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="/python3/python3-step1.html"
                            title="Python3 编程第一步"
                            >Python3 编程第一步</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                      <li class="dd-item" data-id="python3-data-type">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="/python3/python3-data-type.html"
                            title="Python3 基本数据类型"
                            >Python3 基本数据类型</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                      <li class="dd-item" data-id="python3-comment">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="/python3/python3-comment.html"
                            title="Python3 注释"
                            >Python3 注释</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                      <li class="dd-item" data-id="python3-basic-operators">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="/python3/python3-basic-operators.html"
                            title="Python3 运算符"
                            >Python3 运算符</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                      <li class="dd-item" data-id="python3-number">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="/python3/python3-number.html"
                            title="Python3 数字"
                            >Python3 数字</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                      <li class="dd-item" data-id="python3-sequence">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="/python3/python3-sequence.html"
                            title="Python3 序列"
                            >Python3 序列</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                      <li class="dd-item" data-id="python3-string">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="/python3/python3-string.html"
                            title="Python3 字符串"
                            >Python3 字符串</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                      <li class="dd-item" data-id="python3-list">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="/python3/python3-list.html"
                            title="Python3 列表"
                            >Python3 列表</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                      <li class="dd-item" data-id="python3-tuple">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="/python3/python3-tuple.html"
                            title="Python3 元组"
                            >Python3 元组</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                      <li class="dd-item" data-id="python3-dictionary">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="/python3/python3-dictionary.html"
                            title="Python3 字典"
                            >Python3 字典</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                      <li class="dd-item" data-id="python3-set">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="/python3/python3-set.html"
                            title="Python3 集合"
                            >Python3 集合</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                      <li class="dd-item" data-id="python3-conditional-statements">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="/python3/python3-conditional-statements.html"
                            title="Python3 条件控制"
                            >Python3 条件控制</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                      <li class="dd-item" data-id="python3-loop">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="/python3/python3-loop.html"
                            title="Python3 循环"
                            >Python3 循环</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                      <li class="dd-item" data-id="python3-iterator-generator">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="/python3/python3-iterator-generator.html"
                            title="Python3 迭代器与生成器"
                            >Python3 迭代器与生成器</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                      <li class="dd-item" data-id="python3-function">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="/python3/python3-function.html"
                            title="Python3 函数"
                            >Python3 函数</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                      <li class="dd-item" data-id="python3-data-structure">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="/python3/python3-data-structure.html"
                            title="Python3 数据结构"
                            >Python3 数据结构</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                      <li class="dd-item" data-id="python3-module">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="/python3/python3-module.html"
                            title="Python3 模块"
                            >Python3 模块</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                      <li class="dd-item" data-id="python3-inputoutput">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="/python3/python3-inputoutput.html"
                            title="Python3 输入和输出"
                            >Python3 输入和输出</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                      <li class="dd-item" data-id="python3-file-methods">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="/python3/python3-file-methods.html"
                            title="Python3 File 方法"
                            >Python3 File 方法</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                      <li class="dd-item" data-id="python3-os-file-methods">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="/python3/python3-os-file-methods.html"
                            title="Python3 OS 文件/目录方法"
                            >Python3 OS 文件/目录方法</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                      <li class="dd-item" data-id="python3-errors-execptions">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="/python3/python3-errors-execptions.html"
                            title="Python3 错误和异常"
                            >Python3 错误和异常</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                      <li class="dd-item" data-id="python3-class">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="/python3/python3-class.html"
                            title="Python3 面向对象"
                            >Python3 面向对象</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                      <li class="dd-item" data-id="python3-stdlib">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="/python3/python3-stdlib.html"
                            title="Python3 标准库概览"
                            >Python3 标准库概览</a
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
                      <li class="dd-item" data-id="python3-socket">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="/python3/python3-socket.html"
                            title="Python3 网络编程"
                            >Python3 网络编程</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                      <li class="dd-item" data-id="python3-smtp">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="/python3/python3-smtp.html"
                            title="Python3 SMTP发送邮件"
                            >Python3 SMTP发送邮件</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                      <li class="dd-item" data-id="python3-multithreading">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="/python3/python3-multithreading.html"
                            title="Python3 多线程"
                            >Python3 多线程</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                      <li class="dd-item" data-id="python3-xml-processing">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="/python3/python3-xml-processing.html"
                            title="Python3 XML解析"
                            >Python3 XML解析</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                      <li class="dd-item" data-id="python3-json">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="/python3/python3-json.html"
                            title="Python3 JSON 数据解析"
                            >Python3 JSON 数据解析</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                      <li class="dd-item" data-id="python3-date-time">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="/python3/python3-date-time.html"
                            title="Python3 日期和时间"
                            >Python3 日期和时间</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                      <li class="dd-item" data-id="python3-built-in-functions">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="/python3/python3-built-in-functions.html"
                            title="Python3 内置函数"
                            >Python3 内置函数</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                      <li class="dd-item" data-id="python3-itn2323i">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="https://www.w3cschool.cn/python3/python3-u6ij2pw3.html"
                            title="Python3 爬虫实战教程"
                            >Python3 爬虫实战教程</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                      <li class="dd-item" data-id="python3-o4k7323j">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="https://www.w3cschool.cn/python3/python3-eam72ylh.html"
                            title="Python3 深度/机器学习类"
                            >Python3 深度/机器学习类</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                      <li class="dd-item" data-id="python3-dbvf323k">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="https://www.w3cschool.cn/python3/python3-ngwk2zg8.html
    


    
"
                            title="Python3 制作小游戏"
                            >Python3 制作小游戏</a
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
                  <li class="dd-item" data-id="python3-g2cf3e1m">
                    <div class="dd-content folder-open">
                      <i class="folder icon-folder-open"></i>
                      <a title="精品网课推荐">精品网课推荐</a>
                    </div>
                    <ol class="dd-list">
                      <li class="dd-item" data-id="python3-m3xq3e1n">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="https://www.w3cschool.cn/minicourse/play/python3course"
                            title="Python3 入门"
                            >Python3 入门</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                      <li class="dd-item" data-id="python3-b7qn3e1p">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="https://www.w3cschool.cn/minicourse/play/python2_txy"
                            title="Python 基础入门"
                            >Python 基础入门</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                      <li class="dd-item" data-id="python3-3ngx3e1o">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="https://www.w3cschool.cn/minicourse/play/pythonhigh"
                            title="Python3 进阶"
                            >Python3 进阶</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                    </ol>
                  </li>
                  <li class="dd-item" data-id="python3-g1ma3fhq">
                    <div class="dd-content folder-open">
                      <i class="folder icon-folder-open"></i>
                      <a title="Python基础教程">Python基础教程</a>
                    </div>
                    <ol class="dd-list">
                      <li class="dd-item" data-id="python3-w2z33pu5">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="https://www.w3cschool.cn/pythonclass/"
                            title="Python基础教程"
                            >Python基础教程</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                    </ol>
                  </li>
                  <li class="dd-item" data-id="python3-mbjd3khq">
                    <div class="dd-content folder-open">
                      <i class="folder icon-folder-open"></i>
                      <a title="Python 更多内容">Python 更多内容</a>
                    </div>
                    <ol class="dd-list">
                      <li class="dd-item" data-id="python3-fcwz3khr">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="/python3/python3-fcwz3khr.html"
                            title="Python 备忘单"
                            >Python 备忘单</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                    </ol>
                  </li>
                  <li class="dd-item" data-id="python3-76kb3oyc">
                    <div class="dd-content folder-open">
                      <i class="folder icon-folder-open"></i>
                      <a title="python第三方库">python第三方库</a>
                    </div>
                    <ol class="dd-list">
                      <li class="dd-item" data-id="python3-xkgz3oyd">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="https://www.w3cschool.cn/requests2/



    
"
                            title="request 教程-python的http库"
                            >request 教程-python的http库</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                      <li class="dd-item" data-id="python3-excel">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="/python3/python3-excel.html"
                            title="Python3 操作excel库总结"
                            >Python3 操作excel库总结</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                      <li class="dd-item" data-id="python3-y7h23pf4">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="https://www.w3cschool.cn/httpx/"
                            title="httpx教程-用于python的下一代http库"
                            >httpx教程-用于python的下一代http库</a
                          >
                        </div>
                        <ol class="dd-list"></ol>
                      </li>
                      <li class="dd-item" data-id="python3-qs373pf5">
                        <div class="dd-content folder-open">
                          <i class="folder icon-folder-open"></i>
                          <a title="web相关">web相关</a>
                        </div>
                        <ol class="dd-list">
                          <li class="dd-item" data-id="python3-imbv3p1n">
                            <div class="dd-content">
                              <i class="ic-folder-open2"></i>
                              <a
                                href="https://www.w3cschool.cn/minicourse/play/pyflask

    
"
                                title="flask微课-python轻量web框架"
                                >flask微课-python轻量web框架</a
                              >
                            </div>
                            <ol class="dd-list"></ol>
                          </li>
                          <li class="dd-item" data-id="python3-4onb3p1o">
                            <div class="dd-content">
                              <i class="ic-folder-open2"></i>
                              <a
                                href="https://www.w3cschool.cn/flask/


    
"
                                title="flask教程 -python轻量web框架"
                                >flask教程 -python轻量web框架</a
                              >
                            </div>
                            <ol class="dd-list"></ol>
                          </li>
                          <li class="dd-item" data-id="python3-jcly3p28">
                            <div class="dd-content">
                              <i class="ic-folder-open2"></i>
                              <a
                                href="https://www.w3cschool.cn/django4/"
                                title="Django教程-python web框架"
                                >Django教程-python web框架</a
                              >
                            </div>
                            <ol class="dd-list"></ol>
                          </li>
                          <li class="dd-item" data-id="python3-utpl3qtr">
                            <div class="dd-content">
                              <i class="ic-folder-open2"></i>
                              <a
                                href="Python Tornado教程_w3cschool"
                                title="Tornado教程 - 高性能的web框架"
                                >Tornado教程 - 高性能的web框架</a
                              >
                            </div>
                            <ol class="dd-list"></ol>
                          </li>
                        </ol>
                      </li>
                      <li class="dd-item" data-id="python3-vyk73pf6">
                        <div class="dd-content folder-open">
                          <i class="folder icon-folder-open"></i>
                          <a title="数据分析相关">数据分析相关</a>
                        </div>
                        <ol class="dd-list">
                          <li class="dd-item" data-id="python3-qtew3p7o">
                            <div class="dd-content">
                              <i class="ic-folder-open2"></i>
                              <a
                                href="https://www.w3cschool.cn/pandas/"
                                title="pandas教程-python数据分析库"
                                >pandas教程-python数据分析库</a
                              >
                            </div>
                            <ol class="dd-list"></ol>
                          </li>
                          <li class="dd-item" data-id="python3-zv9n3p1y">
                            <div class="dd-content">
                              <i class="ic-folder-open2"></i>
                              <a
                                href="https://www.w3cschool.cn/numpy_ln/"
                                title="numpy教程 -python数据科学库"
                                >numpy教程 -python数据科学库</a
                              >
                            </div>
                            <ol class="dd-list"></ol>
                          </li>
                          <li class="dd-item" data-id="python-xlwt">
                            <div class="dd-content">
                              <i class="ic-folder-open2"></i>
                              <a
                                href="/python3/python-xlwt.html"
                                title="Python3 xlwt库基本教程"
                                >Python3 xlwt库基本教程</a
                              >
                            </div>
                            <ol class="dd-list"></ol>
                          </li>
                          <li class="dd-item" data-id="python3-ey533p27">
                            <div class="dd-content">
                              <i class="ic-folder-open2"></i>
                              <a
                                href="https://www.w3cschool.cn/matplotlib/"
                                title="matplotlib教程 - python制表库"
                                >matplotlib教程 - python制表库</a
                              >
                            </div>
                            <ol class="dd-list"></ol>
                          </li>
                        </ol>
                      </li>
                      <li class="dd-item" data-id="python3-isod3po9">
                        <div class="dd-content">
                          <i class="ic-folder-open2"></i>
                          <a
                            href="https://www.w3cschool.cn/pillow/"
                            title="pillow教程-python操作图像库"
                            >pillow教程-python操作图像库</a
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