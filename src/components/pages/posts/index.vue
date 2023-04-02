<template>
  <div>users</div>
  <div class="card-group">
    <div v-for="post in posts" :key="post.id" style="float: right;margin-right: 5px">
      <div class="card" style="width: 18rem;">
        <h1 class="card-header">
          <router-link :to="{name:'postin',params:{ 'id': post.id }}"> Title: {{ post.title }}</router-link>
        </h1>
        <p>{{post.body}}</p>
      </div>
      <!--      <ShowUser :user="user"/>-->

    </div>


  </div>
<!--  <router-view></router-view>-->
</template>

<script>
import {ref} from "vue";
import axios from "axios";

export default {
  name: "PostsPage",

  setup(){
  const posts=ref([]);
  function getPosts() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
          // handle success
          posts.value = response.data;
          console.log(response);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .finally(function () {
          // always executed
        });

  }
  getPosts();
    return {posts}
  }
}
</script>

<style scoped>

</style>