<template>
  <div class="layer spread-layer">
    <div class="layer-content">
      <p>
        <a
          href="https://www.w3cschool.cn/group/senior/initfrontend?fcode=index_focusitem_initfrontend"
          target="_blank"
          ><img src="./images/1621598421575215.png" alt="初级前端体系课程" /></a
        ><a
          href="https://www.w3cschool.cn/group/vip/pythoner?fcode=index_focusitem"
          target="_blank"
          ><img src="./images/1595930304329711.png" alt="Python零基础入门" /></a
        ><a href="https://www.w3cschool.cn/codecamp/" target="_blank"
          ><img src="./images/1606441706220683.png" alt="编程实战" /></a
        ><a
          href="https://www.w3cschool.cn/group/senior/initphp?fcode=index_focusitem"
          target="_blank"
          ><img src="./images/1621598437368241.png" alt="php工程师"
        /></a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MySpread",
  data() {
    return {};
  },
};
</script>

<style scoped>
/* ------- Layer 层 ------- */
.layer {
  margin: 32px 0;
}
.layer-title {
  position: relative;
  font-size: 20px;
  font-weight: 600;
  line-height: 30px;
}
.layer-title::before {
  content: "";
  display: inline-block;
  margin-right: 12px;
  border-width: 8px 0 8px 8px;
  border-style: solid;
  border-color: transparent transparent transparent #fe6a00;
}
.layer-title .more {
  position: absolute;
  top: 8px;
  right: 0;
  font-size: 14px;
  font-weight: normal;
  line-height: 1;
  color: #666;
}
.layer-title .more:hover {
  color: #fe6a00;
}
.layer-subtitle {
  margin-left: 16px;
  font-size: 14px;
  font-weight: 400;
  vertical-align: top;
  color: #666;
}
.layer-content {
  margin-top: 20px;
}

/* 推广 */
.spread-layer .layer-content {
  margin-right: -24px;
}
.spread-layer .layer-content img {
  display: inline-block;
  width: 267px;
  height: 86px;
  overflow: hidden;
  border-radius: 4px;
  margin-right: 24px;
}

@media (min-width: 1300px) {
  .spread-layer .layer-content img {
    width: 292px;
    height: 94px;
  }
}
</style>