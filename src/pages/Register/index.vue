<template>
  <div class="lrf-main">
    <a class="site-logo" href="/">
      <img
        src="//7n.w3cschool.cn/statics/img/logo/indexlogo@2x.png"
        alt="编程狮-logo"
        width="214"
        height="50"
      />
    </a>
    <div class="lrf-panel">
      <div class="lm-tabs">
        <div
          class="lm-tabs-nav"
          style="border-bottom: 2px solid rgb(232, 234, 236)"
        >
          <div class="lm-tabs-tab" data-key="0">登录</div>
          <div class="lm-tabs-tab lm-tabs-tab-active" data-key="1">注册</div>
          <div class="lm-tabs-ink" style="left: 193px; width: 80px"></div>
        </div>
        <div class="lm-tabs-content">
          <div class="lm-tabpanel lm-tabpanel-regist">
            <form class="lm-form regist-form" autocomplete="off">
              <input type="text" style="display: none" />
              <input type="password" style="display: none" />
              <div>
                <div class="lm-form-item lm-form-item-error">
                  <div class="lm-input-wrapper">
                    <input
                      type="text"
                      placeholder="请输入注册手机号"
                      class="lm-input lm-input-lg lm-input-lg-with-prefix"
                    />
                    <span class="lm-input-prefix lm-input-lg-prefix">
                      <i class="i-icon i-icon-mobile"></i>
                    </span>
                  </div>
                  <div class="lm-form-item-error-tip">请输入注册手机号</div>
                </div>
                <div class="lm-form-item auth">
                  <button
                    type="button"
                    class="lm-btn lm-btn-lg lm-btn-block lm-btn-primary"
                    onselectstart="return false"
                  >
                    点击按钮进行验证
                  </button>
                  <div class="popup">
                    <div class="popup-close">
                      <i class="i-icon i-icon-close"></i>
                    </div>
                    <div class="slideImgAuthcode" style="width: 260px">
                      <div class="slide-img" style="height: 116px"></div>
                      <div class="slide-bar">
                        <div
                          class="slide-bar-text"
                          onselectstart="return false"
                        >
                          向右滑动完成拼图
                        </div>
                        <div
                          class="slide-bar-bg"
                          onselectstart="return false"
                        ></div>
                        <div class="slide-bar-btn">
                          <i class="i-icon i-icon-arrow-right"></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="lm-form-item-error-tip"></div>
                </div>
                <div class="lm-form-item">
                  <label class="lm-checkbox-wrapper">
                    <span class="lm-checkbox">
                      <input
                        type="checkbox"
                        checked=""
                        class="lm-checkbox-input"
                      />
                      <span class="lm-checkbox-inner"> </span>
                    </span>
                    <span class="lm-checkbox-word"
                      >我已阅读并同意
                      <a
                        class="regist-agreement"
                        href="/webagreement"
                        target="_blank"
                        >《用户注册协议》</a
                      ></span
                    >
                  </label>
                  <div class="lm-form-item-error-tip"></div>
                </div>
              </div>
              <div style="display: none">
                <div class="text-center lm-form-item">
                  <div>填写短信验证码、密码完成注册</div>
                  <div>
                    短信验证码已发送至&nbsp;+86&nbsp;<span class="tel"></span>
                  </div>
                </div>
                <div class="lm-form-item mcode">
                  <div class="lm-input-wrapper">
                    <input
                      type="text"
                      placeholder="请输入短信验证码"
                      maxlength="4"
                      autocomplete="off"
                      class="lm-input lm-input-lg"
                    />
                    <button type="button" class="lm-btn lm-btn-lg lm-btn-text">
                      获取验证码
                    </button>
                  </div>
                  <div class="lm-form-item-error-tip"></div>
                </div>
                <div class="lm-form-item">
                  <div class="lm-input-wrapper">
                    <input
                      type="password"
                      placeholder="设置密码，下次可使用此密码登录"
                      autocomplete="off"
                      class="
                        lm-input
                        lm-input-lg
                        lm-input-lg-with-prefix
                        lm-input-lg-with-suffix
                      "
                    />
                    <span class="lm-input-prefix lm-input-lg-prefix"
                      ><i class="i-icon i-icon-lock-outline"></i
                    ></span>
                    <span class="lm-input-suffix lm-input-lg-suffix"
                      ><i class="i-icon i-icon-eye-close hover-icon"></i
                    ></span>
                  </div>
                  <div class="lm-form-item-error-tip"></div>
                </div>
                <div class="lm-form-item">
                  <button
                    type="submit"
                    class="lm-btn lm-btn-lg lm-btn-block lm-btn-primary"
                  >
                    注册
                  </button>
                  <div class="lm-form-item-error-tip"></div>
                </div>
                <div class="text-center lm-form-item">
                  <button type="button" class="lm-btn lm-btn-text">
                    返回修改手机号
                  </button>
                </div>
              </div>
            </form>
            <div class="lm-tabpanel-footer">
              <div class="sns">
                <div class="sns-label">快捷登录</div>
                <div class="sns-list">
                  <a class="sns-a sns-wechat" title="微信登录"
                    ><i class="i-icon i-icon-wechat-circle"></i
                  ></a>
                  <a href="/auth?refer=/" class="sns-a sns-qq" title="QQ登录"
                    ><i class="i-icon i-icon-qq-circle"></i
                  ></a>
                  <a
                    href="/auth?platform=github"
                    class="sns-a sns-github"
                    title="Github登录"
                    ><i class="i-icon i-icon-github-circle"></i
                  ></a>
                  <a
                    href="/auth?platform=weibo"
                    class="sns-a sns-weibo"
                    title="微博登录"
                    ><i class="i-icon i-icon-weibo-circle"></i
                  ></a>
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
  name: "Register",
};
</script>

<style>
</style>