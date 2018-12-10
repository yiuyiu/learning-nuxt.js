<template>
  <div>
    <input type="text" v-model="userId">
    <button @click="onLoadUser">Load User</button>
    <router-link to="/users/2">xixi</router-link>
    <nuxt-child/>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userId: ""
    };
  },
  methods: {
    onLoadUser() {
      this.$router.push("/users/" + this.userId);
    }
  },
  layout: "users"
};
</script>
<style scoped>
</style>


