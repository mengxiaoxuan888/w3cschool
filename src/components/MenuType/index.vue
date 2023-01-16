<template>
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
                src="./images/new-ico.png"
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
                  <h3 class="fl children-list-head-title">前端开发初级课程</h3>
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
                  <h3 class="fl children-list-head-title">前端开发中级课程</h3>
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
                  <h3 class="fl children-list-head-title">Python微课类课程</h3>
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
                  <h3 class="fl children-list-head-title">Python视频类课程</h3>
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
                src="./images/7662.png"
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
                src="./images/25257.png"
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
                src="./images/49689.png"
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
                src="./images/27866.png"
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
                src="./images/73410.png"
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
            src="./images/l-btn.png"
            alt="上一张"
            width="26"
            height="50"
          />
        </div>
        <div class="carousel-button-next">
          <img
            src="./images/r-btn.png"
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
                <button class="form-button" type="button" onClick="DoSubmit();">
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
              <a class="fr regist login-sns-zc" href="/register" rel="nofollow"
                ><i class="i-icon i-icon-adduser-circle"></i>注册账号</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuType",
  data() {
    return {};
  },
};
</script>

<style scoped>
/* ------- main ------- */
#main { height: 272px; }
#main .index-container { position: relative; height: 100%; }
/* ------- main ------- */
#main { height: 272px; }
#main .index-container { position: relative; height: 100%; }


/* 侧边导航 */
.sider-nav { position: absolute; top: -52px; left: 0; width: 220px; }
.sider-nav-title { height: 52px; padding-left: 18px; line-height: 52px; font-size: 16px; font-weight: normal; color: #fff; background-color: #fe6a00; border-radius: 4px 4px 0 0; }
.sider-nav-title .i-icon { margin-right: 10px; font-size: 22px; }

.sider-nav-catalog { position: relative; height: 317px; background-color: #fff; border-width: 0 0 1px 1px; border-style: solid; border-color: #eee; }
.sider-nav-catalog .catalog-item { height: 14.28571429%; }
.sider-nav-catalog .catalog-item + .catalog-item { border-top: 1px solid #eee; }
.sider-nav-catalog .catalog-item:hover .title { color: #fe6a00; background-color: #f5f5f5; }
.sider-nav-catalog .catalog-item:hover .title .i-icon { color: #fe6a00; }
.sider-nav-catalog .catalog-item .title { position: relative; display: block; height: 100%; padding-left: 18px; font-size: 15px; }
.sider-nav-catalog .catalog-item .title::before { content: ""; display: inline-block; height: 100%; vertical-align: middle; }
.sider-nav-catalog .catalog-item .title span { display: inline-block; vertical-align: middle; }
.sider-nav-catalog .catalog-item .title .new { position: relative; top: -6px; left: 4px; }
.sider-nav-catalog .catalog-item .title .i-icon { position: absolute; top: 50%; right: 15px; margin-top: -11px; font-size: 15px; color: #aaa; line-height: inherit; }

.sider-nav-catalog .catalog-item .children { display: none; position: absolute; top: 0; left: 100%; z-index: 10; width: 920px; min-height: 317px; line-height: 1.5; background-color: #fff; border: 1px solid #eee; box-shadow: 0 0 4px 0 rgba(102, 102, 102, .25); }
.sider-nav-catalog .catalog-item:hover .children { display: block; }
.sider-nav-catalog .catalog-item .children-list { padding: 0 18px; }
.sider-nav-catalog .catalog-item .children-list-head { padding: 15px 0 12px; }
.sider-nav-catalog .catalog-item .children-list-head-title { font-size: 15px; font-weight: 600; }
.sider-nav-catalog .catalog-item .children-list-head-more { line-height: 22px; color: #fe6a00; }
.sider-nav-catalog .catalog-item .children-list + .children-list .children-list-title { border-top: 1px solid #e6e6e6; }
.sider-nav-catalog .catalog-item .children-list-content { margin-right: -33px; }

.sider-nav-catalog .children .course { float: left; margin-right: 33px; margin-bottom: 18px; font-size: 0; -webkit-transition: all 0.24s ease-in; transition: all 0.24s ease-in; }
.sider-nav-catalog .children .course:hover { -webkit-transform: translateY(-6px); transform: translateY(-6px); }
.sider-nav-catalog .children .course > a { display: block; width: 150px; }
.sider-nav-catalog .children .course-cover { display: block; border-radius: 4px; }
.sider-nav-catalog .children .course-title { width: 100%; padding-top: 6px; font-size: 13px; color: #333; }

@media (min-width: 1300px) {
    #main { height: 312px; }
    .sider-nav-catalog { height: 364px; }
    .sider-nav-catalog .catalog-item .title .i-icon { line-height: inherit; }
    .sider-nav-catalog .catalog-item .children { width: 1020px; min-height: 364px; }
    .sider-nav-catalog .catalog-item .children-list { padding: 0 30px; }
    .sider-nav-catalog .catalog-item .children-list-content { margin-right: -52px; }

    .sider-nav-catalog .children .course { margin-right: 52px; }
}


/* banner */
.banner { width: 680px; height: 100%; margin-left: 220px; background-color: #fff; }

.carousel { position: relative; }
.carousel-wrapper { height: 100%; }
.carousel-slide { position: relative; display: none; height: 100%; }
.carousel-slide > a { display: block; height: 100%; }

.carousel-pagination { z-index: 9; position: absolute; left: 0; bottom: 6%; width: 100%; height: 18px; line-height: 18px; text-align: center; }
.carousel-pagination-bullets { display: inline-block; padding: 0 12px; background-color: rgba(0, 0, 0, 0.1); border-radius: 9px; }
.carousel-pagination-bullet { display: inline-block; width: 8px; height: 8px; margin: 0 4px; border: 1px solid #fff; border-radius: 50%; cursor: pointer; }
.carousel-pagination-bullet.cur { background-color: #fff; }

.carousel-button-prev, .carousel-button-next { position: absolute; top: 50%; z-index: 9; width: 26px; height: 50px; margin-top: -25px; cursor: pointer; filter: alpha(opacity=60); opacity: 0.6; }
.carousel-button-prev:hover, .carousel-button-next:hover { filter: alpha(opacity=90); opacity: 0.9; }
.carousel-button-prev { left: 10px; }
.carousel-button-next { right: 10px; }

@media (min-width: 1300px) {
    .banner { width: 780px; }
}


/* 快捷登录 */
.quick-login { width: 240px; height: 100%; padding: 10px 14px; background-color: #fff; border: 1px solid #eee; }

/* 未登录 */
.quick-login-not .login-title { font-size: 18px; font-weight: normal; text-align: center; color: #333; }
.quick-login-not .login-title::before { content: ""; display: inline-block; width: 7px; height: 7px; margin-right: 8px; vertical-align: middle; background-color: #fe6a00; }

.quick-login-not .login-form { margin-top: 10px; }
.quick-login-not .login-form .form-item { position: relative; }
.quick-login-not .login-form .form-item + .form-item { margin-top: 8px; }

.quick-login-not .login-form .form-item .input-prefix { position: absolute; top: 7px; left: 8px; }
.quick-login-not .login-form .form-item .input-prefix .i-icon { font-size: 18px; color: #cdcdcd; }
.quick-login-not .login-form .form-item .input { width: 100%; padding: 6px 8px 6px 40px; border: 1px solid #ddd; border-radius: 3px; }
.quick-login-not .login-form .form-item .input:hover { border-color: #aaa; }
.quick-login-not .login-form .form-item .input:focus { border-color: #aaa; }

.quick-login-not .login-form .form-item .form-button { display: block; width: 100%; height: 32px; font-size: 15px; line-height: 32px; text-align: center; color: #fff; background-color: #fe6a00; border: none; border-radius: 3px; cursor: pointer;
    -webkit-transition: opacity 0.24s;
            transition: opacity 0.24s;
}
.quick-login-not .login-form .form-item .form-button:hover { background-color: #f16500;}

#scode-form-item { display: none; }
#scode-form-item .input { width: 78px; padding: 6px 8px; }
#scode-img { vertical-align: top; }

#check-form-item { font-size: 13px; }
#check-form-item .checkbox { margin-right: 2px; vertical-align: middle; }

/* 第三方登录 */
.quick-login-not .login-sns { margin-top: 10px; }
.quick-login-not .login-sns-row { line-height: 30px; }
.quick-login-not .login-sns-row + .login-sns-row { margin-top: 4px; }
.quick-login-not .login-sns-row .i-icon { margin-right: 4px; font-size: 30px; color: #b5b9bd; vertical-align: top; -webkit-transition: color .24s ease; transition: color .24s ease; }
.quick-login-not .login-sns-row .sns-qq > span { margin-right: 5px; }

.login-sns-row .sns-wechat:hover .i-icon { color: #3bae56; }
.login-sns-row .sns-qq:hover .i-icon { color: #56abe4; }
.login-sns-row .sns-github:hover .i-icon { color: #24292e; }
.login-sns-row .sns-weibo:hover .i-icon { color: #eb4738; }
.login-sns-row .regist:hover .i-icon { color: #fe6a00; }

@media (min-width: 1300px) {
    .quick-login { padding-top: 12px; padding-bottom: 12px; }
    .quick-login-not .login-form { margin-top: 16px; }
    .quick-login-not .login-form .form-item + .form-item { margin-top: 14px; }
    .quick-login-not .login-sns { margin-top: 16px; }
    .quick-login-not .login-sns-row + .login-sns-row { margin-top: 10px; }
}
</style>