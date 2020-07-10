<template>

  <div>
    <NavBar class="nav-bar">
      <div slot="center">航海日记</div>
    </NavBar>
    <swiper v-if="banners.length">
      <swiper-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
      </swiper-item>
    </swiper>

  </div>


</template>
<script>
  import NavBar from 'common/navBar/NavBar';
  import {Swiper, SwiperItem} from 'common/swiper/index'
  import {getHomeBanner} from 'network/home';

  export default {
    name: 'Home',
    components: {
      NavBar,
      Swiper,
      SwiperItem
    },
    data() {
      return {
        banners: [],
        recommends: []
      }
    },
    created() {
      this.getMultiData();
    },
    methods: {
      getMultiData() {
        getHomeBanner().then(res => {
          this.banners = res;
        })
      },
    }
  }
</script>

<style scoped>

  .nav-bar {
    background-color: var(--color-tint);
    font-weight: 700;
    color: #fff;
  }

  .banner img {
    width: 100%;
    height: 280px;
  }

</style>