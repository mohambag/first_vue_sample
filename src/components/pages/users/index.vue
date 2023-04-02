<template>
  <div>users</div>
  <div class="card-group">
    <div v-for="user in users" :key="user.id" style="float: right;margin-right: 5px">
      <div class="card" style="width: 18rem;">
        <h1 class="card-header">
          <router-link :to="{name:'userin',params:{ 'id': user.id }}"> Name: {{ user.name }}</router-link>
        </h1>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">UserName: {{ user.username }}</li>
          <li class="list-group-item">Phone:{{ user.phone }}</li>
          <li class="list-group-item">Company name: {{ user.company.name }}</li>
        </ul>
      </div>
<!--      <ShowUser :user="user"/>-->

    </div>


  </div>
  <router-view></router-view>
</template>

<script>
import axios from "axios";
import {ref} from "vue";



export default {
  name: "UsersPage",



  setup() {

    const users = ref([]);

    function usersFuncton() {
      axios.get('https://jsonplaceholder.typicode.com/users')
          .then(function (response) {
            // handle success
            users.value = response.data;
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

    usersFuncton();
    return {users}
  }

}
</script>

<style scoped>

</style>