<template>
  <div id="app">
    <!-- 顶部广告 -->
    <!-- <div id="topbanner" style="display: none">
      <div class="close-topbox close_top_ad">
        <i class="i-icon i-icon-close i-icon-close-thin"></i>
      </div>
    </div> -->

    <!-- 右侧悬浮标广告 -->
    <!-- <div id="rfbanner" style="display: none"></div> -->

    <!-- 首页头部 -->
    <div id="header">
      <div class="clearfix index-container">
        <h1 class="fl h-logo">
          <a class="img" href="//www.w3cschool.cn" title="w3cschool">
            <img
              src="/statics/images/indexlogo.png"
              alt="w3cschool"
              width="214"
              height="50"
            />
            <div style="text-indent: -9999px">
              w3cschool - 编程狮，随时随地学编程
            </div>
          </a>
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
                      src="//7n.w3cschool.cn/statics/images/w3c/app-qrcode2.png"
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
              <a class="link" href="//www.w3cschool.cn/register?refer=/">注册</a
              ><span class="sep">|</span
              ><a class="link" href="//www.w3cschool.cn/login?refer=/">登录</a>
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
                  <li class="clearfix activity-item always">
                    <div class="fl activity-item-title">职位课程</div>
                    <a
                      href="/group/senior/initfrontend?fcode=search_recommend"
                      target="_blank"
                      class="activity-item-content"
                      title="从零基础到前端开发就业"
                      >从零基础到前端开发就业</a
                    >
                  </li>
                  <li class="clearfix activity-item always">
                    <div class="fl activity-item-title">职位课程</div>
                    <a
                      href="/group/senior/initphp?fcode=search_recommend"
                      target="_blank"
                      class="activity-item-content"
                      title="PHP工程师从入门到入职"
                      >PHP工程师从入门到入职</a
                    >
                  </li>
                </ul>
                <div class="search-dropdown-history">
                  <div class="history-title">热门搜索</div>
                  <ul class="clearfix history-list">
                    <li class="fl history-list-item">Python</li>
                    <li class="fl history-list-item">Java</li>
                    <li class="fl history-list-item">HTML</li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <!-- nav -->
    <div id="nav">
      <div class="index-container">
        <ul class="clearfix nav-menu">
          <li class="nav-menu-item">
            <a href="/tutorial" title="编程入门教程"
              >编程入门教程<i class="tag tag-free">FREE</i></a
            >
          </li>
          <li class="nav-menu-item">
            <a href="/courses" title="编程课程">编程课程</a>
          </li>
          <li class="nav-menu-item">
            <a href="/codecamp" title="编程实战">编程实战</a>
          </li>
          <li class="nav-menu-item">
            <a href="/exam" title="编程题库">编程题库</a>
          </li>
          <li class="nav-menu-item">
            <a
              href="//123.w3cschool.cn/webtools"
              target="_blank"
              title="w3cschool在线工具集"
              >在线工具</a
            >
          </li>
          <li class="nav-menu-item">
            <a href="/vip?fcode=indexmenu" title="VIP会员"
              >VIP会员<i class="tag tag-hot"> 年末福利</i></a
            >
          </li>
          <li class="nav-menu-item seniorcourse">
            <div title="实战营">
              <a href="/training" target="_blank" title="训练营">训练营</a>
            </div>
          </li>
          <li class="nav-menu-item">
            <a href="/business" target="_blank" title="企业/学校服务"
              >企业/学校服务<i class="tag tag-new">New</i></a
            >
          </li>
        </ul>
      </div>
    </div>

    <!-- main -->
    <div id="main" style="background-color: #fecba7">
      <div class="index-container">
        <div class="sider-nav">
          <h2 class="sider-nav-title">
            <i class="i-icon i-icon-menu"></i>编程课程分类
          </h2>
          <ul class="sider-nav-catalog">
            <!-- 新上好课 -->
            <li class="catalog-item">
              <a
                class="title"
                href="/courses?direction=0&amp;tag=0&amp;type=0&amp;condition=0&amp;order=2"
                ><span>新上好课</span
                ><img
                  class="new"
                  src="//7n.w3cschool.cn/statics/images/w3c/new-ico.png"
                  alt="new"
                  width="22"
                  height="14" /><i class="i-icon i-icon-next"></i
              ></a>
              <div class="children">
                <div class="children-list">
                  <div class="clearfix children-list-head">
                    <h3 class="fl children-list-head-title">新上好课</h3>
                    <a
                      class="fr children-list-head-more"
                      href="/courses?direction=0&amp;tag=0&amp;type=0&amp;condition=0&amp;order=2"
                      target="_blank"
                      >更多&nbsp;&raquo;</a
                    >
                  </div>
                  <ul class="clearfix children-list-content">
                    <li class="course">
                      <a
                        href="/minicourse/play/antpython13"
                        title="MySQL数据库入门实战- Python版"
                        target="_blank"
                      >
                        <img
                          class="course-cover"
                          src="//atts.w3cschool.cn/attachments/cover/cover_antpython13.png?t=1671761537"
                          alt="MySQL数据库入门实战- Python版"
                          width="150"
                          height="84"
                        />
                        <div class="single-ellipsis course-title">
                          MySQL数据库入门实战- Python版
                        </div>
                      </a>
                    </li>
                    <li class="course">
                      <a
                        href="/minicourse/play/antpython12"
                        title="Python Django4开发入门到实战"
                        target="_blank"
                      >
                        <img
                          class="course-cover"
                          src="//atts.w3cschool.cn/attachments/cover/cover_antpython12.png?t=1671761513"
                          alt="Python Django4开发入门到实战"
                          width="150"
                          height="84"
                        />
                        <div class="single-ellipsis course-title">
                          Python Django4开发入门到实战
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="children-list">
                  <div class="clearfix children-list-head">
                    <h3 class="fl children-list-head-title">热门推荐</h3>
                    <a
                      class="fr children-list-head-more"
                      href="/courses?direction=0&amp;tag=0&amp;type=0&amp;condition=0&amp;order=1"
                      target="_blank"
                      >更多&nbsp;&raquo;</a
                    >
                  </div>
                  <ul class="clearfix children-list-content">
                    <li class="course">
                      <a
                        href="/minicourse/play/python3course"
                        title="Python3 入门课程"
                        target="_blank"
                      >
                        <img
                          class="course-cover"
                          src="//atts.w3cschool.cn/attachments/cover/cover_python3course.png?t=1669195870"
                          alt="Python3 入门课程"
                          width="150"
                          height="84"
                        />
                        <div class="single-ellipsis course-title">
                          Python3 入门课程
                        </div>
                      </a>
                    </li>
                    <li class="course">
                      <a
                        href="/minicourse/play/javaminicourse"
                        title="Java入门课程"
                        target="_blank"
                      >
                        <img
                          class="course-cover"
                          src="//atts.w3cschool.cn/attachments/cover/cover_javaminicourse.png?t=1624329622"
                          alt="Java入门课程"
                          width="150"
                          height="84"
                        />
                        <div class="single-ellipsis course-title">
                          Java入门课程
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li class="catalog-item">
              <a class="title" href="/group/frontend.html"
                ><span>前端开发</span><i class="i-icon i-icon-next"></i
              ></a>
              <div class="children">
                <div class="children-list">
                  <div class="clearfix children-list-head">
                    <h3 class="fl children-list-head-title">
                      前端开发初级课程
                    </h3>
                    <a
                      class="fr children-list-head-more"
                      href="/group/frontend.html"
                      target="_blank"
                      >学习路径&nbsp;&raquo;</a
                    >
                  </div>
                  <ul class="clearfix children-list-content">
                    <li class="course">
                      <a
                        href="https://www.w3cschool.cn/wsfnp/"
                        title="Web前端入门扫盲课程"
                        target="_blank"
                      >
                        <img
                          class="course-cover"
                          src="//atts.w3cschool.cn/attachments/cover/cover_wsfnp.jpeg?t=1617004793"
                          alt="Web前端入门扫盲课程"
                          width="150"
                          height="84"
                        />
                        <div class="single-ellipsis course-title">
                          Web前端入门扫盲课程
                        </div>
                      </a>
                    </li>
                    <li class="course">
                      <a
                        href="https://www.w3cschool.cn/htmlcourse/"
                        title="HTML入门课程(含HTML5)"
                        target="_blank"
                      >
                        <img
                          class="course-cover"
                          src="//atts.w3cschool.cn/attachments/cover/cover_htmlcourse.png?t=1669875241"
                          alt="HTML入门课程(含HTML5)"
                          width="150"
                          height="84"
                        />
                        <div class="single-ellipsis course-title">
                          HTML入门课程(含HTML5)
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="children-list">
                  <div class="clearfix children-list-head">
                    <h3 class="fl children-list-head-title">
                      前端开发中级课程
                    </h3>
                  </div>
                  <ul class="clearfix children-list-content">
                    <li class="course">
                      <a
                        href="https://www.w3cschool.cn/jquerycourse/"
                        title="jQuery 入门课程"
                        target="_blank"
                      >
                        <img
                          class="course-cover"
                          src="//atts.w3cschool.cn/attachments/cover/cover_jquerycourse.jpeg?t=1669879496"
                          alt="jQuery 入门课程"
                          width="150"
                          height="84"
                        />
                        <div class="single-ellipsis course-title">
                          jQuery 入门课程
                        </div>
                      </a>
                    </li>
                    <li class="course">
                      <a
                        href="https://www.w3cschool.cn/bootstrap3course/"
                        title="Bootstrap3 入门课程"
                        target="_blank"
                      >
                        <img
                          class="course-cover"
                          src="//atts.w3cschool.cn/attachments/cover/cover_bootstrap3course.jpeg?t=1634192187"
                          alt="Bootstrap3 入门课程"
                          width="150"
                          height="84"
                        />
                        <div class="single-ellipsis course-title">
                          Bootstrap3 入门课程
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="children-list">
                  <div class="clearfix children-list-head">
                    <h3 class="fl children-list-head-title">
                      前端高级及应用课程
                    </h3>
                  </div>
                  <ul class="clearfix children-list-content">
                    <li class="course">
                      <a
                        href="https://www.w3cschool.cn/vuecourse/"
                        title="Vue2入门课程"
                        target="_blank"
                      >
                        <img
                          class="course-cover"
                          src="//atts.w3cschool.cn/attachments/cover/cover_vuecourse.jpeg?t=1669880046"
                          alt="Vue2入门课程"
                          width="150"
                          height="84"
                        />
                        <div class="single-ellipsis course-title">
                          Vue2入门课程
                        </div>
                      </a>
                    </li>
                    <li class="course">
                      <a
                        href="https://www.w3cschool.cn/orbls/"
                        title="Node.js 入门课程"
                        target="_blank"
                      >
                        <img
                          class="course-cover"
                          src="//atts.w3cschool.cn/attachments/cover/cover_orbls.jpeg?t=1624339359"
                          alt="Node.js 入门课程"
                          width="150"
                          height="84"
                        />
                        <div class="single-ellipsis course-title">
                          Node.js 入门课程
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="catalog-item">
              <a class="title" href="/group/pythoner.html"
                ><span>Python系列</span><i class="i-icon i-icon-next"></i
              ></a>
              <div class="children">
                <div class="children-list">
                  <div class="clearfix children-list-head">
                    <h3 class="fl children-list-head-title">
                      Python微课类课程
                    </h3>
                    <a
                      class="fr children-list-head-more"
                      href="/group/pythoner.html"
                      target="_blank"
                      >学习路径&nbsp;&raquo;</a
                    >
                  </div>
                  <ul class="clearfix children-list-content">
                    <li class="course">
                      <a
                        href="https://www.w3cschool.cn/python3course/"
                        title="Python3 入门课程"
                        target="_blank"
                      >
                        <img
                          class="course-cover"
                          src="//atts.w3cschool.cn/attachments/cover/cover_python3course.png?t=1669195870"
                          alt="Python3 入门课程"
                          width="150"
                          height="84"
                        />
                        <div class="single-ellipsis course-title">
                          Python3 入门课程
                        </div>
                      </a>
                    </li>
                    <li class="course">
                      <a
                        href="https://www.w3cschool.cn/pythonhigh/"
                        title="Python3 进阶课程"
                        target="_blank"
                      >
                        <img
                          class="course-cover"
                          src="//atts.w3cschool.cn/attachments/cover/cover_pythonhigh.png?t=1669369221"
                          alt="Python3 进阶课程"
                          width="150"
                          height="84"
                        />
                        <div class="single-ellipsis course-title">
                          Python3 进阶课程
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="children-list">
                  <div class="clearfix children-list-head">
                    <h3 class="fl children-list-head-title">
                      Python视频类课程
                    </h3>
                  </div>
                  <ul class="clearfix children-list-content">
                    <li class="course">
                      <a
                        href="https://www.w3cschool.cn/python1_txy/"
                        title="Python爬虫技术入门指南"
                        target="_blank"
                      >
                        <img
                          class="course-cover"
                          src="//atts.w3cschool.cn/attachments/cover/cover_python1_txy.jpeg?t=1669372897"
                          alt="Python爬虫技术入门指南"
                          width="150"
                          height="84"
                        />
                        <div class="single-ellipsis course-title">
                          Python爬虫技术入门指南
                        </div>
                      </a>
                    </li>
                    <li class="course">
                      <a
                        href="https://www.w3cschool.cn/scrapy_xb/"
                        title="Scrapy框架实战：制作图片爬虫"
                        target="_blank"
                      >
                        <img
                          class="course-cover"
                          src="//atts.w3cschool.cn/attachments/cover/cover_scrapy_xb.jpeg?t=1571659915"
                          alt="Scrapy框架实战：制作图片爬虫"
                          width="150"
                          height="84"
                        />
                        <div class="single-ellipsis course-title">
                          Scrapy框架实战：制作图片爬虫
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="catalog-item">
              <a class="title" href="/group/javaer.html"
                ><span>Java系列</span><i class="i-icon i-icon-next"></i
              ></a>
              <div class="children">
                <div class="children-list">
                  <div class="clearfix children-list-head">
                    <h3 class="fl children-list-head-title">Java 初级</h3>
                    <a
                      class="fr children-list-head-more"
                      href="/group/javaer.html"
                      target="_blank"
                      >学习路径&nbsp;&raquo;</a
                    >
                  </div>
                  <ul class="clearfix children-list-content">
                    <li class="course">
                      <a
                        href="https://www.w3cschool.cn/javaminicourse/"
                        title="Java入门课程"
                        target="_blank"
                      >
                        <img
                          class="course-cover"
                          src="//atts.w3cschool.cn/attachments/cover/cover_javaminicourse.png?t=1624329622"
                          alt="Java入门课程"
                          width="150"
                          height="84"
                        />
                        <div class="single-ellipsis course-title">
                          Java入门课程
                        </div>
                      </a>
                    </li>
                    <li class="course">
                      <a
                        href="https://www.w3cschool.cn/java_one_my/"
                        title="Java开发环境搭建"
                        target="_blank"
                      >
                        <img
                          class="course-cover"
                          src="//atts.w3cschool.cn/attachments/cover/cover_java_one_my.jpeg?t=1571658628"
                          alt="Java开发环境搭建"
                          width="150"
                          height="84"
                        />
                        <div class="single-ellipsis course-title">
                          Java开发环境搭建
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="children-list">
                  <div class="clearfix children-list-head">
                    <h3 class="fl children-list-head-title">Java 进阶</h3>
                  </div>
                  <ul class="clearfix children-list-content">
                    <li class="course">
                      <a
                        href="https://www.w3cschool.cn/ps_my/"
                        title="写给程序员的PS入门课"
                        target="_blank"
                      >
                        <img
                          class="course-cover"
                          src="//atts.w3cschool.cn/attachments/cover/cover_ps_my.png?t=1669878078"
                          alt="写给程序员的PS入门课"
                          width="150"
                          height="84"
                        />
                        <div class="single-ellipsis course-title">
                          写给程序员的PS入门课
                        </div>
                      </a>
                    </li>
                    <li class="course">
                      <a
                        href="https://www.w3cschool.cn/my_qianduan/"
                        title="HTML5+CSS3零基础快速入门"
                        target="_blank"
                      >
                        <img
                          class="course-cover"
                          src="//atts.w3cschool.cn/attachments/cover/cover_my_qianduan.jpeg?t=1629341271"
                          alt="HTML5+CSS3零基础快速入门"
                          width="150"
                          height="84"
                        />
                        <div class="single-ellipsis course-title">
                          HTML5+CSS3零基础快速入门
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="children-list">
                  <div class="clearfix children-list-head">
                    <h3 class="fl children-list-head-title">Java 高级</h3>
                  </div>
                  <ul class="clearfix children-list-content">
                    <li class="course">
                      <a
                        href="https://www.w3cschool.cn/springcourse/"
                        title="Spring 入门课程（Java 开发框架）"
                        target="_blank"
                      >
                        <img
                          class="course-cover"
                          src="//atts.w3cschool.cn/attachments/cover/cover_springcourse.png?t=1634191211"
                          alt="Spring 入门课程（Java 开发框架）"
                          width="150"
                          height="84"
                        />
                        <div class="single-ellipsis course-title">
                          Spring 入门课程（Java 开发框架）
                        </div>
                      </a>
                    </li>
                    <li class="course">
                      <a
                        href="https://www.w3cschool.cn/ssm_my/"
                        title="SSM框架整合详讲"
                        target="_blank"
                      >
                        <img
                          class="course-cover"
                          src="//atts.w3cschool.cn/attachments/cover/cover_ssm_my.png?t=1621602285"
                          alt="SSM框架整合详讲"
                          width="150"
                          height="84"
                        />
                        <div class="single-ellipsis course-title">
                          SSM框架整合详讲
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="catalog-item">
              <a class="title" href="/group/cdev.html"
                ><span>后端开发</span><i class="i-icon i-icon-next"></i
              ></a>
              <div class="children">
                <div class="children-list">
                  <div class="clearfix children-list-head">
                    <h3 class="fl children-list-head-title">后端开发课程</h3>
                    <a
                      class="fr children-list-head-more"
                      href="/group/cdev.html"
                      target="_blank"
                      >学习路径&nbsp;&raquo;</a
                    >
                  </div>
                  <ul class="clearfix children-list-content">
                    <li class="course">
                      <a
                        href="https://www.w3cschool.cn/clanguage/"
                        title="C 语言入门课程"
                        target="_blank"
                      >
                        <img
                          class="course-cover"
                          src="//atts.w3cschool.cn/attachments/cover/cover_clanguage.png?t=1634183469"
                          alt="C 语言入门课程"
                          width="150"
                          height="84"
                        />
                        <div class="single-ellipsis course-title">
                          C 语言入门课程
                        </div>
                      </a>
                    </li>
                    <li class="course">
                      <a
                        href="https://www.w3cschool.cn/phpcourse/"
                        title="PHP 入门课程"
                        target="_blank"
                      >
                        <img
                          class="course-cover"
                          src="//atts.w3cschool.cn/attachments/cover/cover_phpcourse.png?t=1634183270"
                          alt="PHP 入门课程"
                          width="150"
                          height="84"
                        />
                        <div class="single-ellipsis course-title">
                          PHP 入门课程
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="catalog-item">
              <a class="title" href="/group/bigdata.html"
                ><span>编程基础与数据库</span><i class="i-icon i-icon-next"></i
              ></a>
              <div class="children">
                <div class="children-list">
                  <div class="clearfix children-list-head">
                    <h3 class="fl children-list-head-title">数据库课程</h3>
                    <a
                      class="fr children-list-head-more"
                      href="/group/bigdata.html"
                      target="_blank"
                      >学习路径&nbsp;&raquo;</a
                    >
                  </div>
                  <ul class="clearfix children-list-content">
                    <li class="course">
                      <a
                        href="https://www.w3cschool.cn/sqlcourse/"
                        title="SQL 入门课程"
                        target="_blank"
                      >
                        <img
                          class="course-cover"
                          src="//atts.w3cschool.cn/attachments/cover/cover_sqlcourse.png?t=1669369528"
                          alt="SQL 入门课程"
                          width="150"
                          height="84"
                        />
                        <div class="single-ellipsis course-title">
                          SQL 入门课程
                        </div>
                      </a>
                    </li>
                    <li class="course">
                      <a
                        href="https://www.w3cschool.cn/mysqlcourse/"
                        title="MySQL 入门课程"
                        target="_blank"
                      >
                        <img
                          class="course-cover"
                          src="//atts.w3cschool.cn/attachments/cover/cover_mysqlcourse.png?t=1669881634"
                          alt="MySQL 入门课程"
                          width="150"
                          height="84"
                        />
                        <div class="single-ellipsis course-title">
                          MySQL 入门课程
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="children-list">
                  <div class="clearfix children-list-head">
                    <h3 class="fl children-list-head-title">编程基础课程</h3>
                  </div>
                  <ul class="clearfix children-list-content">
                    <li class="course">
                      <a
                        href="https://www.w3cschool.cn/gitcourse/"
                        title="Git 基础课程"
                        target="_blank"
                      >
                        <img
                          class="course-cover"
                          src="//atts.w3cschool.cn/attachments/cover/cover_gitcourse.jpeg?t=1669881186"
                          alt="Git 基础课程"
                          width="150"
                          height="84"
                        />
                        <div class="single-ellipsis course-title">
                          Git 基础课程
                        </div>
                      </a>
                    </li>
                    <li class="course">
                      <a
                        href="https://www.w3cschool.cn/xpjsw/"
                        title="Git 快速入门体验课程"
                        target="_blank"
                      >
                        <img
                          class="course-cover"
                          src="//atts.w3cschool.cn/attachments/cover/cover_xpjsw.png?t=1669880695"
                          alt="Git 快速入门体验课程"
                          width="150"
                          height="84"
                        />
                        <div class="single-ellipsis course-title">
                          Git 快速入门体验课程
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li class="catalog-item">
              <a class="title" href="/group/othercourse.html"
                ><span>其它课程</span><i class="i-icon i-icon-next"></i
              ></a>
              <div class="children">
                <div class="children-list">
                  <div class="clearfix children-list-head">
                    <h3 class="fl children-list-head-title">其它课程</h3>
                    <a
                      class="fr children-list-head-more"
                      href="/group/othercourse.html"
                      target="_blank"
                      >学习路径&nbsp;&raquo;</a
                    >
                  </div>
                  <ul class="clearfix children-list-content">
                    <li class="course">
                      <a
                        href="https://www.w3cschool.cn/svn_my/"
                        title="1小时快速上手版本控制器-SVN精讲视频教程"
                        target="_blank"
                      >
                        <img
                          class="course-cover"
                          src="//atts.w3cschool.cn/attachments/cover/cover_svn_my.png?t=1620824709"
                          alt="1小时快速上手版本控制器-SVN精讲视频教程"
                          width="150"
                          height="84"
                        />
                        <div class="single-ellipsis course-title">
                          1小时快速上手版本控制器-SVN精讲视频教程
                        </div>
                      </a>
                    </li>
                    <li class="course">
                      <a
                        href="https://www.w3cschool.cn/git_mblx/"
                        title="Git新手入门"
                        target="_blank"
                      >
                        <img
                          class="course-cover"
                          src="//atts.w3cschool.cn/attachments/cover/cover_git_mblx.png?t=1622979580"
                          alt="Git新手入门"
                          width="150"
                          height="84"
                        />
                        <div class="single-ellipsis course-title">
                          Git新手入门
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div class="fl banner carousel">
          <div class="carousel-wrapper">
            <div class="carousel-slide" data-bgcolor="#FECBA7">
              <a
                href="https://www.w3cschool.cn/activity/doubleEleven?fcode=webbenner"
                target="_blank"
                stat="sslink-1"
              >
                <img
                  src="/statics/images/7662.png"
                  alt="2022年12月迎战2023新活动"
                  width="100%"
                  height="100%"
                />
              </a>
            </div>
            <div class="carousel-slide" data-bgcolor="#f0eade">
              <a
                href="https://www.w3cschool.cn/minicourse/play/antpython08?fcode=webbanner"
                target="_blank"
                stat="sslink-1"
              >
                <img
                  src="/statics/images/25257.png"
                  alt="python实战：数据图表可视化webbanner"
                  width="100%"
                  height="100%"
                />
              </a>
            </div>
            <div class="carousel-slide" data-bgcolor="#0B1F91">
              <a
                href="https://www.w3cschool.cn/minicourse/play/antpython09?fcode=webbanner"
                target="_blank"
                stat="sslink-1"
              >
                <img
                  src="/statics/images/49689.png"
                  alt="Python处理Excel实现办公自动化webbanner"
                  width="100%"
                  height="100%"
                />
              </a>
            </div>
            <div class="carousel-slide" data-bgcolor="#cfcefe">
              <a
                href="https://www.w3cschool.cn/minicourse/play/antpython04?fcode=webbanner"
                target="_blank"
                stat="sslink-1"
              >
                <img
                  src="/statics/images/27866.png"
                  alt="Python并发编程webbanner"
                  width="100%"
                  height="100%"
                />
              </a>
            </div>
            <div class="carousel-slide" data-bgcolor="#cfeef6">
              <a
                href="https://www.w3cschool.cn/minicourse/play/antpython03?fcode=webbanner"
                target="_blank"
                stat="sslink-1"
              >
                <img
                  src="/statics/images/73410.png"
                  alt="python爬虫从入门到实战webbanner"
                  width="100%"
                  height="100%"
                />
              </a>
            </div>
          </div>

          <div class="carousel-pagination">
            <div class="carousel-pagination-bullets">
              <span class="carousel-pagination-bullet cur"></span>
              <span class="carousel-pagination-bullet"></span>
              <span class="carousel-pagination-bullet"></span>
              <span class="carousel-pagination-bullet"></span>
              <span class="carousel-pagination-bullet"></span>
            </div>
          </div>

          <div class="carousel-button-prev">
            <img
              src="//7n.w3cschool.cn/statics/images/w3c/l-btn.png"
              alt="上一张"
              width="26"
              height="50"
            />
          </div>
          <div class="carousel-button-next">
            <img
              src="//7n.w3cschool.cn/statics/images/w3c/r-btn.png"
              alt="下一张"
              width="26"
              height="50"
            />
          </div>
        </div>

        <div class="fl quick-login">
          <div class="quick-login-not">
            <h4 class="login-title">快速登录</h4>
            <div class="login-form">
              <form id="loginform" action="/checklogin" method="post">
                <input type="hidden" name="refer" value="" />
                <div class="form-item">
                  <span class="input-prefix"
                    ><i class="i-icon i-icon-my"></i
                  ></span>
                  <input
                    class="input"
                    id="username"
                    type="text"
                    name="username"
                    placeholder="学号/手机/邮箱"
                    autofocus
                    autocomplete="off"
                  />
                </div>
                <div class="form-item">
                  <span class="input-prefix"
                    ><i class="i-icon i-icon-locked"></i
                  ></span>
                  <input
                    class="input"
                    id="password"
                    type="password"
                    name="password"
                    placeholder="登录密码"
                    autocomplete="off"
                  />
                </div>
                <div class="text-justify form-item" id="scode-form-item">
                  <input
                    id="scode"
                    name="scode"
                    class="input"
                    placeholder="验证码"
                  />
                  <img
                    src="/scode"
                    alt="点击修改验证码"
                    height="32"
                    title="点击刷新验证码"
                    onclick="change_scode()"
                    id="scode-img"
                  />
                </div>

                <div class="clearfix form-item" id="check-form-item">
                  <div class="fl">
                    <input
                      class="checkbox"
                      type="checkbox"
                      name="remember"
                      value="1"
                      checked
                    /><span>保持登录状态</span>
                  </div>
                  <a class="fr" href="/checkmphone?type=findpwd" rel="nofollow"
                    >忘记密码？</a
                  >
                </div>

                <div class="form-item">
                  <button
                    class="form-button"
                    type="button"
                    onClick="DoSubmit();"
                  >
                    立即登录
                  </button>
                </div>
              </form>
            </div>
            <div class="login-sns">
              <div class="clearfix login-sns-row">
                <a
                  class="fl sns-wechat"
                  href="javascript:;"
                  rel="nofollow"
                  onclick="getWechatQR('index_right_quick_wx_scanner','/');"
                  ><i class="i-icon i-icon-wechat-circle"></i>微信登录</a
                >
                <a class="fr sns-qq" href="/auth" rel="nofollow"
                  ><i class="i-icon i-icon-qq-circle"></i><span>QQ</span>登录</a
                >
              </div>
              <div class="clearfix login-sns-row">
                <a
                  class="fl sns-github"
                  href="/auth?platform=github"
                  rel="nofollow"
                  ><i class="i-icon i-icon-github-circle"></i>Github登录</a
                >
                <a
                  class="fr regist login-sns-zc"
                  href="/register"
                  rel="nofollow"
                  ><i class="i-icon i-icon-adduser-circle"></i>注册账号</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- w3c头条 -->
    <div class="index-container">
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
    </div>

    <div class="index-container">
      <!-- 推广 -->
      <div class="layer spread-layer">
        <div class="layer-content">
          <p>
            <a
              href="https://www.w3cschool.cn/group/senior/initfrontend?fcode=index_focusitem_initfrontend"
              target="_blank"
              ><img
                src="https://atts.w3cschool.cn/attachments/image/20210521/1621598421575215.png"
                alt="初级前端体系课程" /></a
            ><a
              href="https://www.w3cschool.cn/group/vip/pythoner?fcode=index_focusitem"
              target="_blank"
              ><img
                src="https://atts.w3cschool.cn/attachments/image/20200728/1595930304329711.png"
                alt="Python零基础入门" /></a
            ><a href="https://www.w3cschool.cn/codecamp/" target="_blank"
              ><img
                src="https://atts.w3cschool.cn/attachments/image/20201127/1606441706220683.png"
                alt="编程实战" /></a
            ><a
              href="https://www.w3cschool.cn/group/senior/initphp?fcode=index_focusitem"
              target="_blank"
              ><img
                src="https://atts.w3cschool.cn/attachments/image/20210521/1621598437368241.png"
                alt="php工程师"
            /></a>
          </p>
        </div>
      </div>

      <!-- 极客教程 -->
      <div class="layer tutorial-layer">
        <h2 class="layer-title">
          <span>极客教程</span
          ><span class="layer-subtitle">免费的在线教程&技术文档</span>
        </h2>
        <div class="clearfix layer-content tutorial-tabs">
          <ul class="fl tabs-nav">
            <li class="tabs-tab on" data-key="-1">全部</li>
            <li class="tabs-tab" data-key="653">热门教程</li>
            <li class="tabs-tab" data-key="94">HTML/CSS</li>
            <li class="tabs-tab" data-key="95">JavaScript</li>
            <li class="tabs-tab" data-key="675">前端框架</li>
            <li class="tabs-tab" data-key="96">后端语言</li>
            <li class="tabs-tab" data-key="115">开发框架</li>
            <li class="tabs-tab" data-key="97">数据库</li>
            <li class="tabs-tab" data-key="98">移动开发</li>
            <li class="tabs-tab" data-key="101">服务器相关</li>
            <li class="tabs-tab" data-key="102">开发工具</li>
            <li class="tabs-tab" data-key="116">大数据</li>
            <li class="tabs-tab" data-key="676">软件工程</li>
            <li class="tabs-tab" data-key="103">网站建设</li>
            <li class="tabs-tab" data-key="99">XML教程</li>
          </ul>

          <div class="tabs-panel">
            <div class="tutorial-project" data-key="653">
              <h3 class="project-name">热门教程</h3>
              <ul class="project-list">
                <li class="project-list-item-wrap">
                  <a
                    class="clearfix project-list-item"
                    href="//www.w3cschool.cn/python3/"
                    title="Python3 教程"
                  >
                    <div class="fl cover">
                      <img
                        src="//atts.w3cschool.cn/attachments/cover/cover_python3.png?imageView2/1/w/64/h/64&t=1666251302"
                        alt="Python3 教程"
                        width="64"
                        height="64"
                      />
                    </div>
                    <div class="info">
                      <h4 class="single-ellipsis info-title">Python3 教程</h4>
                      <p class="double-ellipsis info-des">
                        Python3.x版本，未来主流的版本。
                      </p>
                    </div>
                  </a>
                </li>
                <li class="project-list-item-wrap">
                  <a
                    class="clearfix project-list-item"
                    href="//www.w3cschool.cn/java/"
                    title="Java 教程"
                  >
                    <div class="fl cover">
                      <img
                        src="//atts.w3cschool.cn/attachments/cover/cover_java.png?imageView2/1/w/64/h/64&t=1617762419"
                        alt="Java 教程"
                        width="64"
                        height="64"
                      />
                    </div>
                    <div class="info">
                      <h4 class="single-ellipsis info-title">Java 教程</h4>
                      <p class="double-ellipsis info-des">
                        一种可以撰写跨平台应用软件的面向对象的程序设计语言。
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div class="tutorial-project" data-key="94">
              <h3 class="project-name">HTML/CSS</h3>
              <ul class="project-list">
                <li class="project-list-item-wrap">
                  <a
                    class="clearfix project-list-item"
                    href="//www.w3cschool.cn/html/"
                    title="HTML 教程"
                  >
                    <div class="fl cover">
                      <img
                        src="//atts.w3cschool.cn/attachments/cover/cover_html.png?imageView2/1/w/64/h/64&t=1623413213"
                        alt="HTML 教程"
                        width="64"
                        height="64"
                      />
                    </div>
                    <div class="info">
                      <h4 class="single-ellipsis info-title">HTML 教程</h4>
                      <p class="double-ellipsis info-des">
                        HTML 指超文本标记语言。 HTML 是通向 WEB 技术世界...
                      </p>
                    </div>
                  </a>
                </li>
                <li class="project-list-item-wrap">
                  <a
                    class="clearfix project-list-item"
                    href="//www.w3cschool.cn/xhtml/"
                    title="XHTML 教程"
                  >
                    <div class="fl cover">
                      <img
                        src="//atts.w3cschool.cn/attachments/cover/cover_xhtml.png?imageView2/1/w/64/h/64&t=1660806566"
                        alt="XHTML 教程"
                        width="64"
                        height="64"
                      />
                    </div>
                    <div class="info">
                      <h4 class="single-ellipsis info-title">XHTML 教程</h4>
                      <p class="double-ellipsis info-des">
                        XHTML是一种比HTML更为严格的可扩展超文本标记语言，也是一种...
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div class="tutorial-project" data-key="95">
              <h3 class="project-name">JavaScript</h3>
              <ul class="project-list">
                <li class="project-list-item-wrap">
                  <a
                    class="clearfix project-list-item"
                    href="//www.w3cschool.cn/javascript/"
                    title="JavaScript 教程"
                  >
                    <div class="fl cover">
                      <img
                        src="//atts.w3cschool.cn/attachments/cover/cover_javascript.png?imageView2/1/w/64/h/64&t=1572425981"
                        alt="JavaScript 教程"
                        width="64"
                        height="64"
                      />
                    </div>
                    <div class="info">
                      <h4 class="single-ellipsis info-title">
                        JavaScript 教程
                      </h4>
                      <p class="double-ellipsis info-des">
                        JavaScript 是世界上最流行的脚本语言。 JavaScr...
                      </p>
                    </div>
                  </a>
                </li>
                <li class="project-list-item-wrap">
                  <a
                    class="clearfix project-list-item"
                    href="//www.w3cschool.cn/htmldom/"
                    title="HTML DOM 教程"
                  >
                    <div class="fl cover">
                      <img
                        src="//atts.w3cschool.cn/attachments/cover/cover_htmldom.png?imageView2/1/w/64/h/64&t=1569047366"
                        alt="HTML DOM 教程"
                        width="64"
                        height="64"
                      />
                    </div>
                    <div class="info">
                      <h4 class="single-ellipsis info-title">HTML DOM 教程</h4>
                      <p class="double-ellipsis info-des">
                        HTML DOM 定义了访问和操作 HTML 文档的标准方法。 ...
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div class="tutorial-project" data-key="675">
              <h3 class="project-name">前端框架</h3>
              <ul class="project-list">
                <li class="project-list-item-wrap">
                  <a
                    class="clearfix project-list-item"
                    href="//www.w3cschool.cn/bootstrap4/"
                    title="bootstrap4 教程"
                  >
                    <div class="fl cover">
                      <img
                        src="//atts.w3cschool.cn/attachments/cover/cover_bootstrap4.png?imageView2/1/w/64/h/64&t=1629364448"
                        alt="bootstrap4 教程"
                        width="64"
                        height="64"
                      />
                    </div>
                    <div class="info">
                      <h4 class="single-ellipsis info-title">
                        bootstrap4 教程
                      </h4>
                      <p class="double-ellipsis info-des">
                        Bootstrap4 目前是 Bootstrap 的最新版本，是一...
                      </p>
                    </div>
                  </a>
                </li>
                <li class="project-list-item-wrap">
                  <a
                    class="clearfix project-list-item"
                    href="//www.w3cschool.cn/vant3/"
                    title="Vant3 中文教程"
                  >
                    <div class="fl cover">
                      <img
                        src="//atts.w3cschool.cn/attachments/cover/cover_vant3.png?imageView2/1/w/64/h/64&t=1648176487"
                        alt="Vant3 中文教程"
                        width="64"
                        height="64"
                      />
                    </div>
                    <div class="info">
                      <h4 class="single-ellipsis info-title">Vant3 中文教程</h4>
                      <p class="double-ellipsis info-des">
                        轻量、可靠的移动端 Vue 组件库
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div class="tutorial-project" data-key="96">
              <h3 class="project-name">后端语言</h3>
              <ul class="project-list">
                <li class="project-list-item-wrap">
                  <a
                    class="clearfix project-list-item"
                    href="//www.w3cschool.cn/python3/"
                    title="Python3 教程"
                  >
                    <div class="fl cover">
                      <img
                        src="//atts.w3cschool.cn/attachments/cover/cover_python3.png?imageView2/1/w/64/h/64&t=1666251302"
                        alt="Python3 教程"
                        width="64"
                        height="64"
                      />
                    </div>
                    <div class="info">
                      <h4 class="single-ellipsis info-title">Python3 教程</h4>
                      <p class="double-ellipsis info-des">
                        Python3.x版本，未来主流的版本。
                      </p>
                    </div>
                  </a>
                </li>
                <li class="project-list-item-wrap">
                  <a
                    class="clearfix project-list-item"
                    href="//www.w3cschool.cn/java/"
                    title="Java 教程"
                  >
                    <div class="fl cover">
                      <img
                        src="//atts.w3cschool.cn/attachments/cover/cover_java.png?imageView2/1/w/64/h/64&t=1617762419"
                        alt="Java 教程"
                        width="64"
                        height="64"
                      />
                    </div>
                    <div class="info">
                      <h4 class="single-ellipsis info-title">Java 教程</h4>
                      <p class="double-ellipsis info-des">
                        一种可以撰写跨平台应用软件的面向对象的程序设计语言。
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div class="tutorial-project" data-key="115">
              <h3 class="project-name">开发框架</h3>
              <ul class="project-list">
                <li class="project-list-item-wrap">
                  <a
                    class="clearfix project-list-item"
                    href="//www.w3cschool.cn/servlet/"
                    title="Servlet 教程"
                  >
                    <div class="fl cover">
                      <img
                        src="//atts.w3cschool.cn/attachments/cover/cover_servlet.png?imageView2/1/w/64/h/64&t=1542262550"
                        alt="Servlet 教程"
                        width="64"
                        height="64"
                      />
                    </div>
                    <div class="info">
                      <h4 class="single-ellipsis info-title">Servlet 教程</h4>
                      <p class="double-ellipsis info-des">
                        运行在 Web 服务器或应用服务器上的程序。
                      </p>
                    </div>
                  </a>
                </li>
                <li class="project-list-item-wrap">
                  <a
                    class="clearfix project-list-item"
                    href="//www.w3cschool.cn/jsp/"
                    title="JSP 教程"
                  >
                    <div class="fl cover">
                      <img
                        src="//atts.w3cschool.cn/attachments/cover/cover_jsp.png?imageView2/1/w/64/h/64&t=1617762678"
                        alt="JSP 教程"
                        width="64"
                        height="64"
                      />
                    </div>
                    <div class="info">
                      <h4 class="single-ellipsis info-title">JSP 教程</h4>
                      <p class="double-ellipsis info-des">
                        JSP与PHP、ASP、ASP.NET等语言类似，运行在服务端的语言。
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div class="tutorial-project" data-key="97">
              <h3 class="project-name">数据库</h3>
              <ul class="project-list">
                <li class="project-list-item-wrap">
                  <a
                    class="clearfix project-list-item"
                    href="//www.w3cschool.cn/mysql/"
                    title="MySQL 教程"
                  >
                    <div class="fl cover">
                      <img
                        src="//atts.w3cschool.cn/attachments/cover/cover_mysql.png?imageView2/1/w/64/h/64&t=1572069887"
                        alt="MySQL 教程"
                        width="64"
                        height="64"
                      />
                    </div>
                    <div class="info">
                      <h4 class="single-ellipsis info-title">MySQL 教程</h4>
                      <p class="double-ellipsis info-des">
                        MySQL是一个关系型数据库管理系统。
                      </p>
                    </div>
                  </a>
                </li>
                <li class="project-list-item-wrap">
                  <a
                    class="clearfix project-list-item"
                    href="//www.w3cschool.cn/oraclejc/"
                    title="Oracle 教程"
                  >
                    <div class="fl cover">
                      <img
                        src="//atts.w3cschool.cn/attachments/cover/cover_oraclejc.png?imageView2/1/w/64/h/64&t=1629364413"
                        alt="Oracle 教程"
                        width="64"
                        height="64"
                      />
                    </div>
                    <div class="info">
                      <h4 class="single-ellipsis info-title">Oracle 教程</h4>
                      <p class="double-ellipsis info-des">
                        ORACLE数据库系统是美国ORACLE公司（甲骨文）提供的以分布...
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div class="tutorial-project" data-key="98">
              <h3 class="project-name">移动开发</h3>
              <ul class="project-list">
                <li class="project-list-item-wrap">
                  <a
                    class="clearfix project-list-item"
                    href="//www.w3cschool.cn/harmonyos/"
                    title="鸿蒙OS开发文档"
                  >
                    <div class="fl cover">
                      <img
                        src="//atts.w3cschool.cn/attachments/cover/cover_harmonyos.png?imageView2/1/w/64/h/64&t=1622892896"
                        alt="鸿蒙OS开发文档"
                        width="64"
                        height="64"
                      />
                    </div>
                    <div class="info">
                      <h4 class="single-ellipsis info-title">鸿蒙OS开发文档</h4>
                      <p class="double-ellipsis info-des">
                        华为自有开源操作系统鸿蒙OS，鸿蒙OS凭借多终端开发IDE，多语言...
                      </p>
                    </div>
                  </a>
                </li>
                <li class="project-list-item-wrap">
                  <a
                    class="clearfix project-list-item"
                    href="//www.w3cschool.cn/weixinapp/"
                    title="微信小程序开发文档"
                  >
                    <div class="fl cover">
                      <img
                        src="//atts.w3cschool.cn/attachments/cover/cover_weixinapp.png?imageView2/1/w/64/h/64&t=1617155749"
                        alt="微信小程序开发文档"
                        width="64"
                        height="64"
                      />
                    </div>
                    <div class="info">
                      <h4 class="single-ellipsis info-title">
                        微信小程序开发文档
                      </h4>
                      <p class="double-ellipsis info-des">
                        微信小程序开发文档，主要介绍了微信小程序的开发教程，微信小程序的a...
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div class="tutorial-project" data-key="101">
              <h3 class="project-name">服务器相关</h3>
              <ul class="project-list">
                <li class="project-list-item-wrap">
                  <a
                    class="clearfix project-list-item"
                    href="//www.w3cschool.cn/linux/"
                    title="Linux 教程"
                  >
                    <div class="fl cover">
                      <img
                        src="//atts.w3cschool.cn/attachments/cover/cover_linux.png?imageView2/1/w/64/h/64&t=1578642945"
                        alt="Linux 教程"
                        width="64"
                        height="64"
                      />
                    </div>
                    <div class="info">
                      <h4 class="single-ellipsis info-title">Linux 教程</h4>
                      <p class="double-ellipsis info-des">
                        Linux是一套免费使用和自由传播的类Unix操作系统。
                      </p>
                    </div>
                  </a>
                </li>
                <li class="project-list-item-wrap">
                  <a
                    class="clearfix project-list-item"
                    href="//www.w3cschool.cn/docker/"
                    title="Docker 教程"
                  >
                    <div class="fl cover">
                      <img
                        src="//atts.w3cschool.cn/attachments/cover/cover_docker.png?imageView2/1/w/64/h/64&t=1542185609"
                        alt="Docker 教程"
                        width="64"
                        height="64"
                      />
                    </div>
                    <div class="info">
                      <h4 class="single-ellipsis info-title">Docker 教程</h4>
                      <p class="double-ellipsis info-des">
                        Docker
                        是一个开源的应用容器引擎，让开发者可以打包他们的应用...
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div class="tutorial-project" data-key="102">
              <h3 class="project-name">开发工具</h3>
              <ul class="project-list">
                <li class="project-list-item-wrap">
                  <a
                    class="clearfix project-list-item"
                    href="//www.w3cschool.cn/vscode/"
                    title="Visual Studio Code 教程"
                  >
                    <div class="fl cover">
                      <img
                        src="//atts.w3cschool.cn/attachments/cover/cover_vscode.png?imageView2/1/w/64/h/64&t=1657529845"
                        alt="Visual Studio Code 教程"
                        width="64"
                        height="64"
                      />
                    </div>
                    <div class="info">
                      <h4 class="single-ellipsis info-title">
                        Visual Studio Code 教程
                      </h4>
                      <p class="double-ellipsis info-des">
                        一个免费的、开源的跨平台编辑器。
                      </p>
                    </div>
                  </a>
                </li>
                <li class="project-list-item-wrap">
                  <a
                    class="clearfix project-list-item"
                    href="//www.w3cschool.cn/sublimetext/"
                    title="Sublime Text 使用手册"
                  >
                    <div class="fl cover">
                      <img
                        src="//atts.w3cschool.cn/attachments/cover/cover_sublimetext.png?imageView2/1/w/64/h/64&t=1542273020"
                        alt="Sublime Text 使用手册"
                        width="64"
                        height="64"
                      />
                    </div>
                    <div class="info">
                      <h4 class="single-ellipsis info-title">
                        Sublime Text 使用手册
                      </h4>
                      <p class="double-ellipsis info-des">
                        本文系统全面的介绍了Sublime Text，旨在成为最优秀的Su...
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div class="tutorial-project" data-key="116">
              <h3 class="project-name">大数据</h3>
              <ul class="project-list">
                <li class="project-list-item-wrap">
                  <a
                    class="clearfix project-list-item"
                    href="//www.w3cschool.cn/hadoop/"
                    title="Hadoop 教程"
                  >
                    <div class="fl cover">
                      <img
                        src="//atts.w3cschool.cn/attachments/cover/cover_hadoop.png?imageView2/1/w/64/h/64&t=1542196103"
                        alt="Hadoop 教程"
                        width="64"
                        height="64"
                      />
                    </div>
                    <div class="info">
                      <h4 class="single-ellipsis info-title">Hadoop 教程</h4>
                      <p class="double-ellipsis info-des">
                        Hadoop是一个开源框架，允许使用简单的编程模型在跨计算机集群的...
                      </p>
                    </div>
                  </a>
                </li>
                <li class="project-list-item-wrap">
                  <a
                    class="clearfix project-list-item"
                    href="//www.w3cschool.cn/apache_pig/"
                    title="Apache Pig 教程"
                  >
                    <div class="fl cover">
                      <img
                        src="//atts.w3cschool.cn/attachments/cover/cover_apache_pig.png?imageView2/1/w/64/h/64&t=1572587549"
                        alt="Apache Pig 教程"
                        width="64"
                        height="64"
                      />
                    </div>
                    <div class="info">
                      <h4 class="single-ellipsis info-title">
                        Apache Pig 教程
                      </h4>
                      <p class="double-ellipsis info-des">
                        Apache Pig是MapReduce的一个抽象，它是一个工具/...
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div class="tutorial-project" data-key="676">
              <h3 class="project-name">软件工程</h3>
              <ul class="project-list">
                <li class="project-list-item-wrap">
                  <a
                    class="clearfix project-list-item"
                    href="//www.w3cschool.cn/software_engineering/"
                    title="软件工程教程"
                  >
                    <div class="fl cover">
                      <img
                        src="//atts.w3cschool.cn/attachments/cover/cover_software_engineering.png?imageView2/1/w/64/h/64&t=1648173489"
                        alt="软件工程教程"
                        width="64"
                        height="64"
                      />
                    </div>
                    <div class="info">
                      <h4 class="single-ellipsis info-title">软件工程教程</h4>
                      <p class="double-ellipsis info-des">软件工程</p>
                    </div>
                  </a>
                </li>
                <li class="project-list-item-wrap">
                  <a
                    class="clearfix project-list-item"
                    href="//www.w3cschool.cn/shejimoshi/"
                    title="设计模式"
                  >
                    <div class="fl cover">
                      <img
                        src="//atts.w3cschool.cn/attachments/cover/cover_shejimoshi.png?imageView2/1/w/64/h/64&t=1542013920"
                        alt="设计模式"
                        width="64"
                        height="64"
                      />
                    </div>
                    <div class="info">
                      <h4 class="single-ellipsis info-title">设计模式</h4>
                      <p class="double-ellipsis info-des">
                        设计模式（Design pattern）是一套被反复使用、多数人知...
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div class="tutorial-project" data-key="103">
              <h3 class="project-name">网站建设</h3>
              <ul class="project-list">
                <li class="project-list-item-wrap">
                  <a
                    class="clearfix project-list-item"
                    href="//www.w3cschool.cn/xuexiw3c/"
                    title="W3C 标准教程"
                  >
                    <div class="fl cover">
                      <img
                        src="//atts.w3cschool.cn/attachments/cover/cover_xuexiw3c.png?imageView2/1/w/64/h/64&t=1621996160"
                        alt="W3C 标准教程"
                        width="64"
                        height="64"
                      />
                    </div>
                    <div class="info">
                      <h4 class="single-ellipsis info-title">W3C 标准教程</h4>
                      <p class="double-ellipsis info-des">
                        当您将我们的《W3C 教程》学习完毕，您会对 W3C
                        有一个全面的...
                      </p>
                    </div>
                  </a>
                </li>
                <li class="project-list-item-wrap">
                  <a
                    class="clearfix project-list-item"
                    href="//www.w3cschool.cn/http/"
                    title="HTTP 教程"
                  >
                    <div class="fl cover">
                      <img
                        src="//atts.w3cschool.cn/attachments/cover/cover_http.png?imageView2/1/w/64/h/64&t=1542253338"
                        alt="HTTP 教程"
                        width="64"
                        height="64"
                      />
                    </div>
                    <div class="info">
                      <h4 class="single-ellipsis info-title">HTTP 教程</h4>
                      <p class="double-ellipsis info-des">
                        HTTP协议（HyperText Transfer Protoco...
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div class="tutorial-project" data-key="99">
              <h3 class="project-name">XML教程</h3>
              <ul class="project-list">
                <li class="project-list-item-wrap">
                  <a
                    class="clearfix project-list-item"
                    href="//www.w3cschool.cn/xml/"
                    title="XML 教程"
                  >
                    <div class="fl cover">
                      <img
                        src="//atts.w3cschool.cn/attachments/cover/cover_xml.png?imageView2/1/w/64/h/64&t=1542254612"
                        alt="XML 教程"
                        width="64"
                        height="64"
                      />
                    </div>
                    <div class="info">
                      <h4 class="single-ellipsis info-title">XML 教程</h4>
                      <p class="double-ellipsis info-des">
                        XML 指扩展标记语言。 在我们的 XML
                        教程中，你将了解什么...
                      </p>
                    </div>
                  </a>
                </li>
                <li class="project-list-item-wrap">
                  <a
                    class="clearfix project-list-item"
                    href="//www.w3cschool.cn/xmldom/"
                    title="XML DOM 教程"
                  >
                    <div class="fl cover">
                      <img
                        src="//atts.w3cschool.cn/attachments/cover/cover_xmldom.png?imageView2/1/w/64/h/64&t=1579665778"
                        alt="XML DOM 教程"
                        width="64"
                        height="64"
                      />
                    </div>
                    <div class="info">
                      <h4 class="single-ellipsis info-title">XML DOM 教程</h4>
                      <p class="double-ellipsis info-des">
                        XML 文档对象模型定义访问和操作XML文档的标准方法。 DOM...
                      </p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- 热门官方文档 -->
      <div class="layer official-tutorial-layer">
        <h2 class="layer-title">
          热门官方文档<a href="/dict" target="_blank" class="more">更多 »</a>
        </h2>
        <div class="tutorial-project">
          <ul class="project-list">
            <li class="project-list-item-wrap">
              <a
                class="clearfix project-list-item"
                href="/python/dict.html"
                title="Python Cheat Sheet"
              >
                <div class="fl cover">
                  <!-- <img src="/statics/images/dict/python-logo.png" alt="Python Cheat Sheet" width="64"> -->
                  <div
                    style="
                      background-image: url(/statics/images/dict/python-logo.png);
                      background-image: none\9;
                      width: 64px;
                      height: 64px;
                      background-size: 90%;
                      background-position: center;
                      background-repeat: no-repeat;
                      background-color: #fff;
                    "
                    class="logo"
                  ></div>
                </div>
                <div class="info">
                  <h4 class="single-ellipsis info-title">Python</h4>
                  <p class="double-ellipsis info-des">
                    Python
                    是一个高层次的结合了解释性、编译性、互动性和面向对象的脚本语言。
                  </p>
                </div>
              </a>
            </li>
            <li class="project-list-item-wrap">
              <a
                class="clearfix project-list-item"
                href="/jquery/dict.html"
                title="jQuery Cheat Sheet"
              >
                <div class="fl cover">
                  <!-- <img src="/statics/images/dict/jquery-logo.jpg" alt="jQuery Cheat Sheet" width="64"> -->
                  <div
                    style="
                      background-image: url(/statics/images/dict/jquery-logo.jpg);
                      background-image: none\9;
                      width: 64px;
                      height: 64px;
                      background-size: 90%;
                      background-position: center;
                      background-repeat: no-repeat;
                      background-color: #fff;
                    "
                  ></div>
                </div>
                <div class="info">
                  <h4 class="single-ellipsis info-title">jQuery</h4>
                  <p class="double-ellipsis info-des">
                    jQuery 是一个 JavaScript 库。 jQuery 极大地简化了 JavaScript
                    编程。 jQuery 很容易学习。
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- 最近更新 -->
      <div class="clearfix layer update-layer">
        <div class="fl update-wrap">
          <div class="clearfix update-wrap-title">
            <h4 class="fl title">最新文章</h4>
            <a
              href="//www.w3cschool.cn/article"
              target="_blank"
              class="fr more-btn"
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
                  >JetBrains Fleet v2022.10 for Windows x64
                  安装包官网下载地址</a
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

      <!-- 友情链接 -->
      <div class="clearfix layer friendly-layer">
        <h4 class="fl title">友情链接</h4>
        <div class="link-wrap">
          <a
            class="link"
            href="https://www.w3cschool.cn/"
            title="W3Cschool"
            target="_blank"
            >W3Cschool</a
          >
          <a
            class="link"
            href="https://www.w3cschool.cn/"
            title="W3C编程狮"
            target="_blank"
            >编程狮(W3C)</a
          >
          <a class="link" href="/links" target="_blank">更多&raquo;</a>
        </div>
      </div>
    </div>

    <!-- 底部抽屉 -->
    <div class="widget-body" data-type="index"></div>

    <!-- 底部 -->
    <!-- footer start  -->
    <div id="footer_item">
      <div id="footer">
        <div class="footer-box">
          <div class="footer-title">网站相关</div>
          <ul class="footer-items">
            <li>
              <a href="//www.w3cschool.cn/about/about.html">关于w3cschool</a>
            </li>
            <li><a href="//www.w3cschool.cn/about/join.html">加入我们</a></li>
            <li><a href="//www.w3cschool.cn/sitemap/">网站地图</a></li>
            <li>
              <a href="//www.w3cschool.cn/archives/" title="文章存档"
                >文章存档</a
              >
            </li>
          </ul>
        </div>
        <div class="footer-box">
          <div class="footer-title">常用链接</div>
          <ul class="footer-items">
            <li>
              <a
                href="//www.w3cschool.cn/codecamp/"
                target="_blank"
                title="编程实战"
                >编程实战</a
              >
            </li>
            <li>
              <a
                href="https://wenjuan.feishu.cn/m/cfm?t=sn8KOaaRthFi-w2n0"
                target="_blank"
                >课程合作</a
              >
            </li>
            <li>
              <a
                href="//www.w3cschool.cn/download#downloadpc"
                target="_blank"
                title="w3cschool离线版下载"
                >w3cschool离线下载</a
              >
            </li>
            <li>
              <a
                href="https://m.w3cschool.cn/"
                target="_blank"
                title="w3cschool手机版"
                >w3cschool手机版</a
              >
            </li>
          </ul>
        </div>
        <div class="footer-box">
          <div class="footer-title">官方APP</div>
          <ul class="footer-items">
            <li>
              <a
                href="https://m.w3cschool.cn/download?fcode=footer_w3cschool_app"
                target="_blank"
                title="w3cschool编程狮"
                >w3cschool编程狮</a
              >
            </li>
            <li>
              <a
                href="//www.w3cschool.cn/pythonclass/"
                target="_blank"
                title="Python编程狮"
                >Python编程狮</a
              >
            </li>
            <li>
              <a
                href="//www.w3cschool.cn/javaclass/"
                target="_blank"
                title="Java编程狮"
                >Java编程狮</a
              >
            </li>
            <li>
              <a
                href="https://m.w3cschool.cn/toolsdownload?fcode=footer_tools_app"
                target="_blank"
                title="编程狮工具箱"
                >编程狮工具箱</a
              >
            </li>
          </ul>
        </div>
        <div class="footer-box">
          <div class="footer-title">联系我们</div>
          <ul class="footer-items">
            <li>
              <a
                href="https://www.w3cschool.cn/w3cschool/question-10232085.html"
                target="_blank"
                title="常见问题QA"
                >常见问题QA</a
              >
            </li>
            <li>
              <a
                href="https://jq.qq.com/?_wv=1027&amp;k=5mjhkIY"
                ref="nofollow"
                target="_blank"
                >官方QQ群：668469541</a
              >
            </li>
            <li>
              <a
                href="//wpa.qq.com/msgrd?v=3&amp;uin=3532917531&amp;site=qq&amp;menu=yes"
                ref="nofollow"
                target="_blank"
                >商务合作QQ：3532917531</a
              >
            </li>
            <li>
              <a href="javascript:;"
                >企业采购微信号：Marlboro90
                <div class="service-qrcode">
                  <img
                    src="//7n.w3cschool.cn/statics/images/public/business-wechat-xsm.jpg?t=1"
                    width="100%"
                  /></div
              ></a>
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
          Copyright&copy;2021&nbsp;<a
            href="//www.w3cschool.cn"
            target="_blank"
            title="w3cschool"
            >w3cschool</a
          >编程狮<span>|</span
          ><a
            href="https://beian.miit.gov.cn/"
            target="_blank"
            rel="nofollow"
            class="footer-record"
            >闽ICP备15016281号-3</a
          ><span>|</span
          ><a
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=35020302033924"
            target="_blank"
            rel="nofollow"
            ><i class="beian"></i>闽公网安备35020302033924号</a
          >
        </p>
        <p>
          违法和不良信息举报电话：173-0602-2364<span>|</span
          ><a href="mailto:jubao@eeedong.com">举报邮箱：jubao@eeedong.com</a>
        </p>
      </div>
    </div>

    <!-- <div id="dialogBackground" class="dialogBackground"></div>

    <div class="feedback-Box" style="display: none">
      <div class="feedback-Box-content" style="width: 662px">
        <div class="feedback-Box-top">
          <span class="feedback-Box-title">意见反馈</span>
          <span onclick="closeDialogBox(this)" class="feedback-Box-close"
            >X</span
          >
        </div>
        <ul>
          <li class="feedback-box">
            <div
              id="feedbackRadio"
              type="radio"
              name="feedbackType"
              data-value="0"
            >
              反馈类型：
              <select id="selecttype">
                <option value="0">产品建议</option>
                <option value="1">课程内容</option>
                <option value="2">bug提交</option>
                <option value="3">其他问题</option>
              </select>
            </div>
            <textarea
              name="reportInfo"
              id="elmaaa"
              class="feedback-text"
              rows="15"
              placeholder="请留下您宝贵的意见反馈吧。"
            ></textarea>
            <p>联系方式：</p>
            <input
              type="text"
              placeholder="留个联系方式呗..."
              name="reportAddress"
              class="radio-text"
              id="reportAddress"
              style="height: 30px; width: 200px"
            />
          </li>
        </ul>
        <button class="search-s" onclick="dialogSubmit(this)" id="reportSubmit">
          提交
        </button>
      </div>
    </div>

    <div id="note-start" style="display: none"></div> -->

    <!-- <div id="detail" style="display: none">
      <div id="note-Dialog" class="note-Dialog">
        <div class="note-Box-content">
          <div class="ntitlebox">
            <input
              type="text"
              placeholder=""
              name="ntitle"
              class="ntitle"
              id="ntitle"
            />
          </div>
          <div id="editorarea">
            <textarea
              name="ncontent"
              id="ncontent"
              class="ncontent"
              rows="15"
              placeholder=""
              style="width: 700px; height: 200px; overflow: auto"
            ></textarea>
          </div>
          <p></p>
          <a class="closenote" href="/my/note" target="_blank"
            >查看完整版笔记</a
          >
          <button class="notesubmit" id="notesubmit">保存</button>
          <button class="notebtn pull-right closenote" style="margin: 20px 0">
            关闭
          </button>
        </div>
      </div>
    </div> -->

    <!-- 侧边工具栏：判断完页面是否植入美洽后再显示，防止闪烁 -->
    <div id="toolbar" style="display: none">
      <!-- <div class="tool app">
        <a href="/download" target="_blank" class="tool-inner">
          <div class="tool-icon"></div>
          <div>App下载</div>
        </a>
        <div class="tool-popover">
          <div class="tool-popover-inner">
            <div class="img">
              <img
                src="//7n.w3cschool.cn/statics/images/w3c/app-qrcode2.png"
                alt="App下载"
                width="140"
                height="140"
              />
            </div>
            <p>扫描二维码</p>
            <p>下载编程狮App</p>
          </div>
        </div>
      </div>
      <div class="tool wechat">
        <div class="tool-inner">
          <div class="tool-icon"></div>
          <div>关注有礼</div>
        </div>
        <div class="tool-popover">
          <div class="tool-popover-inner">
            <div class="img">
              <img
                src="//7n.w3cschool.cn/statics/images/w3c/mp-qrcode.png"
                alt="微信公众号"
                width="140"
                height="140"
              />
            </div>
            <p>扫码关注 领资料包</p>
          </div>
        </div>
      </div>
      <div
        class="tool feedback"
        data-module="page"
        onclick="showDialogBox(this)"
      >
        <div class="tool-inner">
          <div class="tool-icon"></div>
          <div>意见反馈</div>
        </div>
      </div>
      <div class="tool service">
        <a href="/help" target="_blank">
          <div class="tool-inner">
            <div class="tool-icon"></div>
            <div>帮助中心</div>
          </div>
        </a>
      </div> -->
      <div class="tool backtop" data-visibility="50">
        <div class="tool-inner">
          <div class="tool-icon"></div>
          <div>返回顶部</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  // components: {
  //   HelloWorld,
  // },
};
</script>

<style>
</style>
