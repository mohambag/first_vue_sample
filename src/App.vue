<template>
  <HeaderPage/>
<HomePage/>

  <router-view></router-view>


</template>

<script>
import HomePage from './components/HomePage.vue'
import HeaderPage from "@/components/HeaderPage.vue";

export default {
  name: 'App',
  components: {
    HeaderPage,
    HomePage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
