<template>
  <div class="admin-post-page">
    <section class="update-form">
      <admin-post-form :post="loadedPost"/>
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm";
export default {
  layout: "admin",
  components: {
    AdminPostForm
  },
  data() {
    return {
      loadedPost: {
        author: "yuyi",
        title: "my awesome post",
        content: "super amazing",
        thumbnailLink: "http://placecorgi.com/400/400"
      }
    };
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
