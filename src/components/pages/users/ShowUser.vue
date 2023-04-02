<template>
<div>salam</div>
  <div class="card-group">
    <div>
      <div class="card" style="width: 18rem;">
        <h1 class="card-header">
        Name: {{ user.name }}
        </h1>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">UserName: {{ user.username }}</li>
          <li class="list-group-item">Phone:{{ user.phone }}</li>
          <li class="list-group-item">Company name:</li>
        </ul>
      </div>
    </div>


  </div>
</template>

<script>
import axios from "axios";
import {ref} from "vue";

import {useRoute} from "vue-router";

export default {
  name: "ShowUser",
  setup() {

    const user = ref({});
    const route = useRoute();

    function getUser() {
      axios.get(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
          .then(function (response) {
            // handle success
            user.value = response.data;
            console.log(user);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .finally(function () {
            // always executed
          });
      // console.log(u)
      //
    }

    getUser();
    return {user}
  }

}
</script>

<style scoped>

</style>