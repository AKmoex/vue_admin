<template>
  <div>
    <div class="topbar bg-black text-whilte py-2 px-3 d-flex ai-center">
      <img src="../assets/logo.png" height="30" />
      <div class="px-3 flex-1">
        <div class="text-white">王者荣耀</div>
        <div class="text-grey-1 fs-xs">团队成就更多</div>
      </div>
      <button type="button" class="btn bg-primary">立即下载</button>
    </div>
    <div class="bg-primary pt-3 pb-2">
      <div class="nav d-flex text-white jc-around">
        <div class="nav-item nav-inverse pb-1">
          <router-link class="nav-link" to="/" tag="div">首页</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" to="/" tag="div">攻略中心</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" to="/" tag="div">赛事中心</router-link>
        </div>
      </div>
    </div>

    <router-view></router-view>
  </div>
</template>
<style lang="scss">
//简单实现吸顶效果
.topbar {
  position: sticky;
  top: 0;
  z-index: 999;
}
</style>