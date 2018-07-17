<template>
  <div id="app">
    <router-view class="main"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss" rel="stylesheet/scss">
  @import "assets/style/index.scss";

  #app,
  body,
  html {
    width: 100%;
    height: 100%;
  }

  .main {
    width: 100%;
    height: 100%;
    background: #ededed;
  }
</style>

