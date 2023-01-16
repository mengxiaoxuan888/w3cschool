<template>
  <div id="nav">
    <div class="index-container">
      <ul class="clearfix nav-menu">
        <li class="nav-menu-item" v-for="item in navMenuItem" :key="item.id">
          <a :href="item.href" target="_blank" :title="item.title">{{item.title}}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyNav",
  data() {
    return {
      navMenuItem:[
        {id:1,href:"/tutorial",title:"编程入门教程"},
        {id:2,href:"/courses",title:"编程课程"},
        {id:3,href:"/codecamp",title:"编程实战"},
        {id:4,href:"/exam",title:"编程题库"},
        {id:5,href:"//123.w3cschool.cn/webtools",title:"在线工具"},
        {id:6,href:"/vip?fcode=indexmenu",title:"VIP会员"},
        {id:7,href:"/training",title:"训练营"},
        {id:8,href:"/business",title:"企业/学校服务"}
      ]
    };
  },
};
</script>

<style scoped>
/* ------- nav ------- */
#nav {
  height: 52px;
  margin-top: 10px;
}
.nav-menu {
  padding-left: 220px;
}
.nav-menu-item {
  position: relative;
  float: left;
  padding: 0 20px;
  font-size: 16px;
  line-height: 52px;
  cursor: pointer;
}
.nav-menu-item .tag {
  position: absolute;
  top: 4px;
  right: -4px;
  padding: 2px 4px;
  border-radius: 4px;
  color: #fff;
  font-size: 12px;
  font-style: normal;
  line-height: 1;
  -webkit-transform: scale(0.8);
  -moz-transform: scale(0.8);
  -ms-transform: scale(0.8);
  -o-transform: scale(0.8);
  transform: scale(0.8);
}
.nav-menu-item .tag::after {
  content: "";
  position: absolute;
  left: 15%;
  bottom: -4px;
  border-style: solid;
  border-width: 5px 5px 0;
  border-color: transparent;
}

.nav-menu-item .tag-free {
  background-color: #7ed321;
}
.nav-menu-item .tag-free::after {
  border-top-color: #7ed321;
}
.nav-menu-item .tag-hot {
  background-color: #ff3c1a;
}
.nav-menu-item .tag-hot::after {
  border-top-color: #ff3c1a;
}
.nav-menu-item .tag-new {
  background-color: #ff5a05;
}
.nav-menu-item .tag-new::after {
  border-top-color: #ff5a05;
}

.nav-menu-item.seniorcourse .dropdown {
  left: 50%;
  width: 124px;
  height: 0;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}
.nav-menu-item.seniorcourse:hover .dropdown {
  height: 80px;
}
.nav-menu-item.seniorcourse .dropdown-content a {
  display: block;
  line-height: 32px;
  transition: background-color 0.24s ease, color 0.24s ease;
}
.nav-menu-item.seniorcourse .dropdown-content a:hover {
  background-color: #f5f5f5;
}
.nav-menu-item.seniorcourse .dropdown-content a:hover .i-icon {
  color: #fe6a00;
}
</style>