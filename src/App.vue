<template>
  <div id="app">

    <router-view></router-view>

    <MainTabBar/>

  </div>
</template>

<script>

  // var Mock = require('mockjs')
  // var data = Mock.mock({
  //   // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  //   'list|1-10': [{
  //     // 属性 id 是一个自增数，起始值为 1，每次增 1
  //     'id|+1': 1
  //   }]
  // })
  // // 输出结果
  // console.log(JSON.stringify(data, null, 4))

  import {fetchSourceData} from 'network/home';
  import '@/mock/mock';
  import MainTabBar from 'components/content/maintabBar/MainTabBar'

  export default {
    name: 'App',
    components: {
      MainTabBar
    },
    created() {
      this.fetchSourceData();
    },
    methods:{
      fetchSourceData () {
        fetchSourceData().then(data=>{
          console.log(data);
        })
      }
    }
  }
</script>

<style>
  @import "assets/css/base.css";

</style>
