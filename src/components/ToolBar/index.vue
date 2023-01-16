<template>
  <div id="toolbar" style="display: none">
    <div class="tool backtop" data-visibility="50">
      <div class="tool-inner">
        <div class="tool-icon"></div>
        <div>返回顶部</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToolBar",
  data() {
    return {};
  },
};
</script>

<style scoped>
/* ------- 侧边工具栏 ------- */
#toolbar { position: fixed; bottom: 100px; right: 0; z-index: 999; font-size: 12px; background-color: #fff; box-shadow: 0 0 10px 0 rgba(102, 102, 102, .25); }

#toolbar .tool { position: relative; text-align: center; line-height: 1; color: #666; cursor: pointer; }
#toolbar .tool a {color: inherit;}
#toolbar .tool.backtop { display: none; }
#toolbar .tool-inner { display: block; padding: 10px 6px; color: inherit; -webkit-transition: none; transition: none; }
#toolbar .tool-icon { width: 32px; height: 32px; margin: 0 auto 4px; background: url("//7n.w3cschool.cn/statics/images/sprite/toolbar.png") no-repeat 0 0/600% 200%; }
#toolbar .tool.app .tool-icon { background-position: 0 0; }
#toolbar .tool.wechat .tool-icon { background-position: -32px 0; }
#toolbar .tool.feedback .tool-icon { background-position: -64px 0; }
#toolbar .tool.service .tool-icon { background-position: -96px 0; }
#toolbar .tool.backtop .tool-icon { background-position: -128px 0; }

#toolbar .tool:hover { color: #fff; background-color: #fe6a00; }
#toolbar .tool:hover .tool-inner { color: #fff; }
#toolbar .tool:hover .tool-popover { display: block; }
#toolbar .tool.app:hover .tool-icon { background-position: 0 -32px; }
#toolbar .tool.wechat:hover .tool-icon { background-position: -32px -32px; }
#toolbar .tool.feedback:hover .tool-icon { background-position: -64px -32px; }
#toolbar .tool.service:hover .tool-icon { background-position: -96px -32px; }
#toolbar .tool.backtop:hover .tool-icon { background-position: -128px -32px; }

#toolbar .tool-popover { display: none; position: absolute; top: 0; right: 100%; z-index: 999; background-color: transparent; }
#toolbar .tool-popover-inner { margin-right: 12px; font-size: 14px; color: #333; width: 140px; padding-bottom: 8px; background-color: #fff; box-shadow: 0 0 10px 0 rgba(102, 102, 102, .25); }
#toolbar .tool-popover-inner p { line-height: 1.5; }

</style>