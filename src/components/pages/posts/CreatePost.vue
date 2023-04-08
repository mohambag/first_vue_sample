<template>

  <SubmitForm @formData="createPost" :buttonLoading="loading" :submitButtonName="submitButton"/>

</template>

<script>
import {ref} from "vue";

import SubmitForm from "@/components/components/form.vue";
import axios from "axios";
import swal from "sweetalert2";

export default {
  components: {SubmitForm},

  setup() {

    const loading = ref(false);
    const submitButton="Create";
    function createPost(formData) {
      console.log(formData);
      loading.value = true;
      axios.post('https://jsonplaceholder.typicode.com/posts', {
        id: 1,
        title: formData.title,
        body: formData.body,
        userId: 1
      }).then(function (response) {
        console.log('okkk');
        loading.value = false;
        swal.fire('Create post successfully')
        console.log(response)
      }).catch(function (err) {
        console.log(err)
      })
    }


    return {createPost, loading,submitButton}
  }

}
</script>