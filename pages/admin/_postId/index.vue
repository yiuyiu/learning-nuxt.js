<template>
  <div class="admin-post-page">
    <section class="update-form">
      <admin-post-form :post="loadedPost" @submit="onSubmitted"/>
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm";
import axios from "axios-https-proxy-fix";
export default {
  layout: "admin",
  middleware: ["check-auth", "auth"],
  components: {
    AdminPostForm
  },
  asyncData(context) {
    return axios
      .get(
        "https://nuxt-blog-fdaed.firebaseio.com/posts/" +
          context.params.postId +
          ".json",
        {
          proxy: {
            host: "127.0.0.1",
            port: 1087
          }
        }
      )
      .then(res => {
        return {
          loadedPost: { ...res.data, id: context.params.postId }
        };
      })
      .catch(e => context.error(e));
  },
  methods: {
    onSubmitted(editedPost) {
      this.$store
        .dispatch("editPost", editedPost)
        .then(() => this.$router.push("/admin"));
    }
  }
};
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}
@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
