<template>
    <div class="sidebar-box">
          <div id="course">
            <h2>分类导航</h2>
          </div>
          <ul class="nav1">
            <li class="li1" v-for="item in nav" :key="item.id">
              <a href="javascript:;">{{item.name}}</a>
              <ul class="nav2">
                <li class="li2" v-for="list in item.children" :key="list.id">
                  <a :href="list.href" :title="list.title">{{list.name}}</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
</template>

<script>
export default {
    name:"SidebarBox",
  data() {
    return {
      nav:[
        {
          "id":1,
          "name":"最新推荐",
          "children":[
            {
              "id":1,
              "href":"//www.w3cschool.cn/freejquery/index.html",
              "title":"免费Jquery插件合集",
              "name":"免费Jquery插件合集"
            },
            {
              "id":2,
              "href":"//www.w3cschool.cn/wkspring/index.html",
              "title":"Spring 教程",
              "name":"Spring 教程"
            }
          ]
        },
        {
          "id":2,
          "name":"HTML/CSS",
          "children":[
            {
              "id":1,
              "href":"//www.w3cschool.cn/freejquery/index.html",
              "title":"HTML教程",
              "name":"HTML教程"
            },
            {
              "id":2,
              "href":"//www.w3cschool.cn/wkspring/index.html",
              "title":"CSS参考手册",
              "name":"CSS参考手册"
            }
          ]
        },
        {
          "id":3,
          "name":"JavaScript",
          "children":[
            {
              "id":1,
              "href":"//www.w3cschool.cn/freejquery/index.html",
              "title":"JavaScript教程",
              "name":"JavaScript教程"
            },
            {
              "id":2,
              "href":"//www.w3cschool.cn/wkspring/index.html",
              "title":"Vue.js 2.0 教程",
              "name":"Vue.js 2.0 教程"
            }
          ]
        },
        {
          "id":4,
          "name":"后端语言",
          "children":[
            {
              "id":1,
              "href":"//www.w3cschool.cn/freejquery/index.html",
              "title":"Python基础教程",
              "name":"Python基础教程"
            },
            {
              "id":2,
              "href":"//www.w3cschool.cn/wkspring/index.html",
              "title":"Julia教程",
              "name":"Julia教程"
            }
          ]
        },
      ]
    }
  },    
}
</script>

<style>

</style>