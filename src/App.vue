<template>
  <div id="app">

    <router-view></router-view>

    <MainTabBar/>

  </div>
</template>

<script>
import MainTabBar from 'components/content/maintabBar/MainTabBar'
export default {
  name: 'App',
  components: {
    MainTabBar
  }
}
</script>

<style>
  @import "assets/css/base.css";

</style>
