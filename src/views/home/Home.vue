<template>

    <div>
        <NavBar class="nav-bar">
            <div slot="center">摆摊日记</div>
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
  import {getHomeMultidata, BANNER, RECOMMEND} from 'network/home';

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
        getHomeMultidata().then(res => {
          this.banners = res.data[BANNER].list
          this.recommends = res.data[RECOMMEND].list
          // 下次更新DOM时,获取新的tabOffsetTop值(不保险,可以在updated钩子中获取)
          // this.$nextTick(() => {
          //   this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop
          // })
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
    }

</style>