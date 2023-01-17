<template>
  <div class="layer tutorial-layer">
    <h2 class="layer-title">
      <span>极客教程</span
      ><span class="layer-subtitle">免费的在线教程&技术文档</span>
    </h2>
    <div class="clearfix layer-content tutorial-tabs">
      <ul class="fl tabs-nav">
        <li v-for="item in tabsNav" :key="item.id" :class="item.datakey==-1?'tabs-tab on':'tabs-tab'" :data-key="item.datakey">
          {{item.name}}
        </li>
      </ul>

      <div class="tabs-panel">
        <div v-for="item in tutorialProject" :key="item.id" class="tutorial-project" :data-key="item.dataKey">
          <h3 class="project-name">{{item.name}}</h3>
          <ul class="project-list">
            <li class="project-list-item-wrap" v-for="list in item.projectList" :key="list.id">
              <a class="clearfix project-list-item" :href="list.href" :title="list.title">
                <div class="fl cover">
                  <img :src="list.src" :alt="list.alt" width="64" height="64"/>
                </div>
                <div class="info">
                  <h4 class="single-ellipsis info-title">{{list.name}}</h4>
                  <p class="double-ellipsis info-des">
                    {{list.info}}
                  </p>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyTutorial",
  data() {
    return {
      tabsNav:[
        {"id":1,"datakey":"-1","name":"全部"},
        {"id":2,"datakey":"653","name":"热门教程"},
        {"id":3,"datakey":"94","name":"HTML/CSS"},
        {"id":4,"datakey":"95","name":"JavaScript"},
        {"id":5,"datakey":"675","name":"前端框架"},
        {"id":6,"datakey":"96","name":"后端语言"},
        {"id":7,"datakey":"115","name":"开发框架"},
        {"id":8,"datakey":"97","name":"数据库"},
        {"id":9,"datakey":"98","name":"移动开发"},
        {"id":10,"datakey":"101","name":"服务器相关"},
        {"id":11,"datakey":"102","name":"开发工具"},
        {"id":12,"datakey":"116","name":"大数据"},
        {"id":13,"datakey":"676","name":"软件工程"},
        {"id":14,"datakey":"103","name":"网站建设"},
        {"id":15,"datakey":"99","name":"XML教程"}
      ],
      tutorialProject:[
        {
          "id":1,
          "dataKey":"653",
          "name":"热门教程",
          "projectList":[
            {
              "id":1,
              "href":"//www.w3cschool.cn/python3/",
              "title":"Python3 教程",
              "src":"//atts.w3cschool.cn/attachments/cover/cover_python3.png?imageView2/1/w/64/h/64&t=1666251302",
              "alt":"Python3 教程",
              "name":"Python3 教程",
              "info":"Python3.x版本，未来主流的版本。"
            },
            {
              "id":2,
              "href":"//www.w3cschool.cn/java/",
              "title":"Java 教程",
              "src":"//atts.w3cschool.cn/attachments/cover/cover_java.png?imageView2/1/w/64/h/64&t=1617762419",
              "alt":"Java 教程",
              "name":"Java 教程",
              "info":"一种可以撰写跨平台应用软件的面向对象的程序设计语言。"
            }
          ]
        },
        {
          "id":2,
          "dataKey":"94",
          "name":"HTML/CSS",
          "projectList":[
            {
              "id":1,
              "href":"//www.w3cschool.cn/python3/",
              "title":"Python3 教程",
              "src":"//atts.w3cschool.cn/attachments/cover/cover_python3.png?imageView2/1/w/64/h/64&t=1666251302",
              "alt":"Python3 教程",
              "name":"Python3 教程",
              "info":"Python3.x版本，未来主流的版本。"
            },
            {
              "id":2,
              "href":"//www.w3cschool.cn/java/",
              "title":"Java 教程",
              "src":"//atts.w3cschool.cn/attachments/cover/cover_java.png?imageView2/1/w/64/h/64&t=1617762419",
              "alt":"Java 教程",
              "name":"Java 教程",
              "info":"一种可以撰写跨平台应用软件的面向对象的程序设计语言。"
            }
          ]
        },
        {
          "id":3,
          "dataKey":"95",
          "name":"JavaScript",
          "projectList":[
            {
              "id":1,
              "href":"//www.w3cschool.cn/python3/",
              "title":"Python3 教程",
              "src":"//atts.w3cschool.cn/attachments/cover/cover_python3.png?imageView2/1/w/64/h/64&t=1666251302",
              "alt":"Python3 教程",
              "name":"Python3 教程",
              "info":"Python3.x版本，未来主流的版本。"
            },
            {
              "id":2,
              "href":"//www.w3cschool.cn/java/",
              "title":"Java 教程",
              "src":"//atts.w3cschool.cn/attachments/cover/cover_java.png?imageView2/1/w/64/h/64&t=1617762419",
              "alt":"Java 教程",
              "name":"Java 教程",
              "info":"一种可以撰写跨平台应用软件的面向对象的程序设计语言。"
            }
          ]
        },
        {
          "id":4,
          "dataKey":"675",
          "name":"前端框架",
          "projectList":[
            {
              "id":1,
              "href":"//www.w3cschool.cn/python3/",
              "title":"Python3 教程",
              "src":"//atts.w3cschool.cn/attachments/cover/cover_python3.png?imageView2/1/w/64/h/64&t=1666251302",
              "alt":"Python3 教程",
              "name":"Python3 教程",
              "info":"Python3.x版本，未来主流的版本。"
            },
            {
              "id":2,
              "href":"//www.w3cschool.cn/java/",
              "title":"Java 教程",
              "src":"//atts.w3cschool.cn/attachments/cover/cover_java.png?imageView2/1/w/64/h/64&t=1617762419",
              "alt":"Java 教程",
              "name":"Java 教程",
              "info":"一种可以撰写跨平台应用软件的面向对象的程序设计语言。"
            }
          ]
        },
        {
          "id":5,
          "dataKey":"96",
          "name":"后端语言",
          "projectList":[
            {
              "id":1,
              "href":"//www.w3cschool.cn/python3/",
              "title":"Python3 教程",
              "src":"//atts.w3cschool.cn/attachments/cover/cover_python3.png?imageView2/1/w/64/h/64&t=1666251302",
              "alt":"Python3 教程",
              "name":"Python3 教程",
              "info":"Python3.x版本，未来主流的版本。"
            },
            {
              "id":2,
              "href":"//www.w3cschool.cn/java/",
              "title":"Java 教程",
              "src":"//atts.w3cschool.cn/attachments/cover/cover_java.png?imageView2/1/w/64/h/64&t=1617762419",
              "alt":"Java 教程",
              "name":"Java 教程",
              "info":"一种可以撰写跨平台应用软件的面向对象的程序设计语言。"
            }
          ]
        },
        {
          "id":6,
          "dataKey":"115",
          "name":"开发框架",
          "projectList":[
            {
              "id":1,
              "href":"//www.w3cschool.cn/python3/",
              "title":"Python3 教程",
              "src":"//atts.w3cschool.cn/attachments/cover/cover_python3.png?imageView2/1/w/64/h/64&t=1666251302",
              "alt":"Python3 教程",
              "name":"Python3 教程",
              "info":"Python3.x版本，未来主流的版本。"
            },
            {
              "id":2,
              "href":"//www.w3cschool.cn/java/",
              "title":"Java 教程",
              "src":"//atts.w3cschool.cn/attachments/cover/cover_java.png?imageView2/1/w/64/h/64&t=1617762419",
              "alt":"Java 教程",
              "name":"Java 教程",
              "info":"一种可以撰写跨平台应用软件的面向对象的程序设计语言。"
            }
          ]
        },
        {
          "id":7,
          "dataKey":"97",
          "name":"数据库",
          "projectList":[
            {
              "id":1,
              "href":"//www.w3cschool.cn/python3/",
              "title":"Python3 教程",
              "src":"//atts.w3cschool.cn/attachments/cover/cover_python3.png?imageView2/1/w/64/h/64&t=1666251302",
              "alt":"Python3 教程",
              "name":"Python3 教程",
              "info":"Python3.x版本，未来主流的版本。"
            },
            {
              "id":2,
              "href":"//www.w3cschool.cn/java/",
              "title":"Java 教程",
              "src":"//atts.w3cschool.cn/attachments/cover/cover_java.png?imageView2/1/w/64/h/64&t=1617762419",
              "alt":"Java 教程",
              "name":"Java 教程",
              "info":"一种可以撰写跨平台应用软件的面向对象的程序设计语言。"
            }
          ]
        },
        {
          "id":8,
          "dataKey":"98",
          "name":"移动开发",
          "projectList":[
            {
              "id":1,
              "href":"//www.w3cschool.cn/python3/",
              "title":"Python3 教程",
              "src":"//atts.w3cschool.cn/attachments/cover/cover_python3.png?imageView2/1/w/64/h/64&t=1666251302",
              "alt":"Python3 教程",
              "name":"Python3 教程",
              "info":"Python3.x版本，未来主流的版本。"
            },
            {
              "id":2,
              "href":"//www.w3cschool.cn/java/",
              "title":"Java 教程",
              "src":"//atts.w3cschool.cn/attachments/cover/cover_java.png?imageView2/1/w/64/h/64&t=1617762419",
              "alt":"Java 教程",
              "name":"Java 教程",
              "info":"一种可以撰写跨平台应用软件的面向对象的程序设计语言。"
            }
          ]
        },
        {
          "id":9,
          "dataKey":"181",
          "name":"服务器相关",
          "projectList":[
            {
              "id":1,
              "href":"//www.w3cschool.cn/python3/",
              "title":"Python3 教程",
              "src":"//atts.w3cschool.cn/attachments/cover/cover_python3.png?imageView2/1/w/64/h/64&t=1666251302",
              "alt":"Python3 教程",
              "name":"Python3 教程",
              "info":"Python3.x版本，未来主流的版本。"
            },
            {
              "id":2,
              "href":"//www.w3cschool.cn/java/",
              "title":"Java 教程",
              "src":"//atts.w3cschool.cn/attachments/cover/cover_java.png?imageView2/1/w/64/h/64&t=1617762419",
              "alt":"Java 教程",
              "name":"Java 教程",
              "info":"一种可以撰写跨平台应用软件的面向对象的程序设计语言。"
            }
          ]
        },
        {
          "id":10,
          "dataKey":"101",
          "name":"服务器相关",
          "projectList":[
            {
              "id":1,
              "href":"//www.w3cschool.cn/python3/",
              "title":"Python3 教程",
              "src":"//atts.w3cschool.cn/attachments/cover/cover_python3.png?imageView2/1/w/64/h/64&t=1666251302",
              "alt":"Python3 教程",
              "name":"Python3 教程",
              "info":"Python3.x版本，未来主流的版本。"
            },
            {
              "id":2,
              "href":"//www.w3cschool.cn/java/",
              "title":"Java 教程",
              "src":"//atts.w3cschool.cn/attachments/cover/cover_java.png?imageView2/1/w/64/h/64&t=1617762419",
              "alt":"Java 教程",
              "name":"Java 教程",
              "info":"一种可以撰写跨平台应用软件的面向对象的程序设计语言。"
            }
          ]
        },
        {
          "id":11,
          "dataKey":"102",
          "name":"开发工具",
          "projectList":[
            {
              "id":1,
              "href":"//www.w3cschool.cn/python3/",
              "title":"Python3 教程",
              "src":"//atts.w3cschool.cn/attachments/cover/cover_python3.png?imageView2/1/w/64/h/64&t=1666251302",
              "alt":"Python3 教程",
              "name":"Python3 教程",
              "info":"Python3.x版本，未来主流的版本。"
            },
            {
              "id":2,
              "href":"//www.w3cschool.cn/java/",
              "title":"Java 教程",
              "src":"//atts.w3cschool.cn/attachments/cover/cover_java.png?imageView2/1/w/64/h/64&t=1617762419",
              "alt":"Java 教程",
              "name":"Java 教程",
              "info":"一种可以撰写跨平台应用软件的面向对象的程序设计语言。"
            }
          ]
        },
        {
          "id":12,
          "dataKey":"116",
          "name":"大数据",
          "projectList":[
            {
              "id":1,
              "href":"//www.w3cschool.cn/python3/",
              "title":"Python3 教程",
              "src":"//atts.w3cschool.cn/attachments/cover/cover_python3.png?imageView2/1/w/64/h/64&t=1666251302",
              "alt":"Python3 教程",
              "name":"Python3 教程",
              "info":"Python3.x版本，未来主流的版本。"
            },
            {
              "id":2,
              "href":"//www.w3cschool.cn/java/",
              "title":"Java 教程",
              "src":"//atts.w3cschool.cn/attachments/cover/cover_java.png?imageView2/1/w/64/h/64&t=1617762419",
              "alt":"Java 教程",
              "name":"Java 教程",
              "info":"一种可以撰写跨平台应用软件的面向对象的程序设计语言。"
            }
          ]
        },
        {
          "id":13,
          "dataKey":"676",
          "name":"软件工程",
          "projectList":[
            {
              "id":1,
              "href":"//www.w3cschool.cn/python3/",
              "title":"Python3 教程",
              "src":"//atts.w3cschool.cn/attachments/cover/cover_python3.png?imageView2/1/w/64/h/64&t=1666251302",
              "alt":"Python3 教程",
              "name":"Python3 教程",
              "info":"Python3.x版本，未来主流的版本。"
            },
            {
              "id":2,
              "href":"//www.w3cschool.cn/java/",
              "title":"Java 教程",
              "src":"//atts.w3cschool.cn/attachments/cover/cover_java.png?imageView2/1/w/64/h/64&t=1617762419",
              "alt":"Java 教程",
              "name":"Java 教程",
              "info":"一种可以撰写跨平台应用软件的面向对象的程序设计语言。"
            }
          ]
        },
        {
          "id":14,
          "dataKey":"103",
          "name":"网站建设",
          "projectList":[
            {
              "id":1,
              "href":"//www.w3cschool.cn/python3/",
              "title":"Python3 教程",
              "src":"//atts.w3cschool.cn/attachments/cover/cover_python3.png?imageView2/1/w/64/h/64&t=1666251302",
              "alt":"Python3 教程",
              "name":"Python3 教程",
              "info":"Python3.x版本，未来主流的版本。"
            },
            {
              "id":2,
              "href":"//www.w3cschool.cn/java/",
              "title":"Java 教程",
              "src":"//atts.w3cschool.cn/attachments/cover/cover_java.png?imageView2/1/w/64/h/64&t=1617762419",
              "alt":"Java 教程",
              "name":"Java 教程",
              "info":"一种可以撰写跨平台应用软件的面向对象的程序设计语言。"
            }
          ]
        },
        {
          "id":15,
          "dataKey":"99",
          "name":"XML教程",
          "projectList":[
            {
              "id":1,
              "href":"//www.w3cschool.cn/python3/",
              "title":"Python3 教程",
              "src":"//atts.w3cschool.cn/attachments/cover/cover_python3.png?imageView2/1/w/64/h/64&t=1666251302",
              "alt":"Python3 教程",
              "name":"Python3 教程",
              "info":"Python3.x版本，未来主流的版本。"
            },
            {
              "id":2,
              "href":"//www.w3cschool.cn/java/",
              "title":"Java 教程",
              "src":"//atts.w3cschool.cn/attachments/cover/cover_java.png?imageView2/1/w/64/h/64&t=1617762419",
              "alt":"Java 教程",
              "name":"Java 教程",
              "info":"一种可以撰写跨平台应用软件的面向对象的程序设计语言。"
            }
          ]
        },
      ]
    };
  },
};
</script>

<style scoped>
/* 教程 - 极客教程 */
.tutorial-tabs .tabs-nav { position: -webkit-sticky; position: sticky; top: 20px; overflow: hidden; width: 220px; border-radius: 8px; box-shadow: 0 4px 30px 0 rgba(238, 242, 245, 0.8); }
.tutorial-tabs .tabs-nav .tabs-tab { padding: 4px 12px; font-size: 15px; line-height: 40px; cursor: pointer; -webkit-transition: all 0.24s; transition: all 0.24s; }
.tutorial-tabs .tabs-nav .tabs-tab:hover { color: #fe6a00; background-color: #f4f5f6; }
.tutorial-tabs .tabs-nav .tabs-tab.on { color: #fff; background-color: #fe6a00; }
.tutorial-tabs .tabs-panel { padding-top: 20px; margin-left: 244px; border-radius: 8px; box-shadow: 0 4px 30px 0 rgba(238, 242, 245, 0.8); }
.tutorial-tabs .tabs-panel .tutorial-project .project-list { padding-bottom: 40px; }

</style>