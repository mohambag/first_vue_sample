<template>
<h1>Hello</h1>

  <div>
    <ul style="display: block;float: left">
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/users">Users</router-link>
      </li>
      <li>
        <router-link to="/posts">Posts</router-link>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  name: "HeaderPage"
}
</script>

<style scoped>

</style>