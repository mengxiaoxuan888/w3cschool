<template>
  <div class="portlet-title pro-title">
      <div class="group-wrap">
        <div class="set-btn-group font-settings pull-left">
          <a href="#" class="expand-collapse-trigger" title="折叠/展开"
            ><i class="icon-th-list"></i
          ></a>
          <a href="#" class="toggle-dropdown-size" title="字体大小设置"
            ><i class="icon-font"></i
          ></a>
          <a href="#" class="toggle-dropdown-background" title="夜间模式"
            ><i class="w3c-icon w3c-icon-night" style="display: contents"></i
          ></a>
          <!-- 视觉主题字体大小设置 -->
          <div class="set-dropdown-menu set-size docblur" style="display: none">
            <div class="dropdown-caret">
              <span class="caret-outer"></span>
              <span class="caret-inner"></span>
            </div>
            <div class="buttons font-opt">
              <button
                class="button size font-reduce"
                font="reduce"
                title="缩小字体"
              >
                A
              </button>
              <button
                class="button size font-enlarge"
                font="enlarge"
                title="放大字体"
              >
                A
              </button>
            </div>
          </div>
          <!-- 视觉主题背景颜色设置 -->
          <div class="set-dropdown-menu set-background docblur">
            <div class="dropdown-caret">
              <span class="caret-outer"></span>
              <span class="caret-inner"></span>
            </div>
            <div class="buttons bg-color">
              <button
                class="button theme background-day"
                color="color-theme-white"
                title="默认模式"
              >
                默认
              </button>
              <button
                class="button theme background-night"
                color="color-theme-night"
                title="夜间模式"
              >
                夜间
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name:"PortletTitle"
}
</script>

<style>

</style>