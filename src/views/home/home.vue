<template>

    <div>
        <NavBar class="nav-bar">
            <div slot="center">摆摊日记</div>
        </NavBar>
        <p>content</p>
    </div>


</template>
<script>
  import NavBar from 'common/navBar/NavBar';


  export default {
    name: 'Home',
    components:{
      NavBar
    }
  }
</script>

<style scoped>

    .nav-bar {
        background-color: var(--color-tint);
        font-weight: 700;
        color: #fff;
    }

</style>