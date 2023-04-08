<template>
  <form @submit.prevent="validationForm()">
    <div class="form-group">
      <label>Title</label>
      <input type="text" class="form-control" placeholder="Enter title" v-model.lazy="form.title">
      <small>{{ form.titleError }}</small>
    </div>
    <div class="form-group">
      <!--      {{post}}-->
      <label>Body</label>
      <textarea v-model.lazy="form.body"></textarea>
      <small>{{ form.bodyError }}</small>
    </div>
    <button :disabled="buttonLoading" type="submit" class="btn btn-primary">{{ submitButtonName }}</button>
  </form>
</template>

<script>
import {reactive} from "vue";


export default {
  name: 'SubmitForm',

  props: {
    buttonLoading: Boolean,
    submitButtonName: String,
    post: Object,

  },
  setup(props, {emit}) {
    const form = reactive({
      title: '',
      body: '',
      titleError: '',
      bodyError: ''
    });

    console.log(props.post);

    function setInput() {
      console.log(props);
      if (props.post !== undefined) {
        form.title = props.post.title;
        form.body = props.post.body
      }
    }

    setInput();
    console.log('ok2')

    function validationForm() {
      if (form.title === '') {
        form.titleError = 'Title field is required'
      } else {
        form.titleError = ''
      }

      if (form.body === '') {
        form.bodyError = 'Body field is required'
      } else {
        form.bodyError = ''
      }

      if (form.body != '' && form.title != '') {
        // createPost();
        emit("formData", form);
      }

    }


    return {form, validationForm, emit}
  }
}
</script>