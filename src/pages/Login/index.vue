<template>
<div class="lrf-main">
  <a class="site-logo" href="/">
    <img src="//7n.w3cschool.cn/statics/img/logo/indexlogo@2x.png" alt="编程狮-logo" width="214" height="50"></a>
<div class="lrf-panel"><div class="lm-tabs"><div class="lm-tabs-nav" style="border-bottom: 2px solid rgb(232, 234, 236);">
  <div class="lm-tabs-tab lm-tabs-tab-active" data-key="0">登录</div>
  <div class="lm-tabs-tab" data-key="1">注册</div>
  <div class="lm-tabs-ink" style="left: 65px; width: 80px;"></div>
</div>
<div class="lm-tabs-content">
  <div class="lm-tabpanel lm-tabpanel-login">
    <form class="lm-form login-form">
      <div class="lm-form-item">
        <div class="lm-input-wrapper">
          <input type="text" placeholder="学号/手机号/邮箱" class="lm-input lm-input-lg lm-input-lg-with-prefix">
          <span class="lm-input-prefix lm-input-lg-prefix">
            <i class="i-icon i-icon-user"></i>
          </span></div>
          <div class="lm-form-item-error-tip"></div>
        </div>
        <div class="lm-form-item">
          <div class="lm-input-wrapper">
            <input type="password" placeholder="登录密码" class="lm-input lm-input-lg lm-input-lg-with-prefix lm-input-lg-with-suffix">
            <span class="lm-input-prefix lm-input-lg-prefix">
              <i class="i-icon i-icon-lock-outline"></i>
            </span>
            <span class="lm-input-suffix lm-input-lg-suffix"><i class="i-icon i-icon-eye-close hover-icon"></i>
            </span>
          </div>
          <div class="lm-form-item-error-tip"></div>
        </div>
        <div class="lm-form-item scode" style="display: none;">
          <div class="lm-input-wrapper">
            <input type="text" placeholder="请输入验证码" maxlength="4" autocomplete="off" class="lm-input lm-input-lg lm-input-lg-with-suffix">
            <span class="lm-input-suffix lm-input-lg-suffix">
              <i class="i-icon i-icon-refresh hover-icon" title="更新验证码"></i>
            </span>
            <div class="scode-img scode-img-large">
              <img src="/scode" alt="更新验证码" title="点击更新验证码" height="100%">
            </div>
          </div>
          <div class="lm-form-item-error-tip"></div>
        </div><div class="clearfix lm-form-item">
          <label class="lm-checkbox-wrapper">
            <span class="lm-checkbox">
              <input type="checkbox" checked="" class="lm-checkbox-input">
              <span class="lm-checkbox-inner"></span>
            </span><span class="lm-checkbox-word">7天内自动登录</span>
          </label>
          <a class="fr findpwd" href="/checkmphone?type=findpwd" target="_blank">找回密码</a>
        </div><div class="lm-form-item">
          <button type="submit" class="lm-btn lm-btn-lg lm-btn-block lm-btn-primary">登录</button>
          <div class="lm-form-item-error-tip"></div>
        </div>
      </form>
      <div class="lm-tabpanel-footer">
        <div class="lm-btn lm-btn-text switch-loginType">手机短信登录</div>
        <div class="sns">
          <div class="sns-label">快捷登录</div>
          <div class="sns-list">
            <a class="sns-a sns-wechat" title="微信登录">
              <i class="i-icon i-icon-wechat-circle"></i>
            </a>
            <a href="/auth?refer=/" class="sns-a sns-qq" title="QQ登录">
              <i class="i-icon i-icon-qq-circle"></i>
            </a>
            <a href="/auth?platform=github" class="sns-a sns-github" title="Github登录">
              <i class="i-icon i-icon-github-circle"></i>
            </a>
            <a href="/auth?platform=weibo" class="sns-a sns-weibo" title="微博登录">
              <i class="i-icon i-icon-weibo-circle"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>

</template>

<script>
export default {
  name: "Login",
};
</script>

<style>
</style>