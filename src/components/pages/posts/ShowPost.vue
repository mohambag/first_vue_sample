<template>
  <div>salam</div>
  <div class="card-group">
    <div>
      <div class="card" style="width: 18rem;">
        <h1 class="card-header">
          Name: {{ post.title }}
        </h1>
        <p>
          {{ post.body }}
        </p>
        <hr/>
        <router-link :to="{name:'updatePost',params:post.id}">edit</router-link>
        <button @click="deletePost">delete</button>
      </div>
    </div>


  </div>
</template>

<script>

import axios from "axios";
import {useRoute} from "vue-router";
import {ref} from "vue";
import swal from "sweetalert2";

export default {
  name: 'ShowPost',
  setup() {
    const route = useRoute();
    const post = ref({});

    function getPost() {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
          .then(function (response) {
            post.value = response.data;
            console.log(response)
          })
          .catch(function (error) {
            console.log(error)
          })
    }

    getPost();


    function deletePost() {
      axios.delete(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
          .then(function () {
            swal.fire(`Post ${route.params.id} deleted successfully`)

          })
          .catch(function (err) {
            console.log(err)
          })
    }

    return {post,deletePost};
  }
}

</script>