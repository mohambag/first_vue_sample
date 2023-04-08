<template>

  <div v-if="pageLoading">loading...</div>
  <SubmitForm v-else @formData="updatePost" :submitButtonName="submitButton" :post="post" :pageLoading="pageLoading"/>

</template>

<script>

import SubmitForm from "@/components/components/form.vue";

import {ref} from "vue";
import axios from "axios";
import swal from "sweetalert2";
import {useRoute} from "vue-router";


export default {
  name: "UpdatePost",
  components: {SubmitForm},

  setup() {

    const loading = ref(false);
    const submitButton = "Update";
    const route = useRoute();
    const post = ref({});
    const pageLoading = ref(true);


    function getPost() {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
          .then(function (response) {
            post.value = response.data;
            pageLoading.value = false;
            console.log('ok1')
          })
          .catch(function (err) {
            console.log(err)
          })
    }

    getPost();

    function updatePost(formData) {
      axios.put(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`, {
        id: 1,
        title: formData.title,
        body: formData.body,
        userId: 1
      })
          .then(function (response) {

            // post.value = response.data;
            loading.value = false;
            swal.fire('Create post successfully')
            console.log(response)
          })
          .catch(function (err) {
            console.log(err)
          })
    }


    return {updatePost, loading, submitButton, post, pageLoading}

  }

}

</script>