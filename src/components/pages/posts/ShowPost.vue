<template>
  <div>salam</div>
  <div class="card-group">
    <div>
      <div class="card" style="width: 18rem;">
        <h1 class="card-header">
          Name: {{ post.title }}
        </h1>
        <p>
          {{post.body}}
        </p>
      </div>
    </div>


  </div>
</template>

<script>

import axios from "axios";
import {useRoute} from "vue-router";
import {ref} from "vue";

export default {
  name:'ShowPost',
  setup(){
    const route=useRoute();
    const post=ref({});
    function getPost() {
axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
    .then(function (response) {
      post.value=response.data;
      console.log(response)
    })
    .catch(function (error) {
      console.log(error)
    })
    }

    getPost();
    return {post};
  }
}

</script>