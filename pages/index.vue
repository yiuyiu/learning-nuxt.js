<template>
  <section class="container">
    <Header/>
    <nuxt-link to="/users">Users</nuxt-link>
  </section>
</template>

<script>
import Logo from "~/components/Logo.vue";
import Header from "~/components/Header.vue";
export default {
  components: {
    Logo,
    Header
  },
  layout: "users"
};
</script>
