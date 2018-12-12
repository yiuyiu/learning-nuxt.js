<template>
  <section class="post-list">
    <PostPreview
      id="1"
      :is-admin="isAdmin"
      thumbnail="http://placecorgi.com/300/400"
      title="hello there"
      previewText="this my first post"
    />
    <PostPreview
      id="1"
      :is-admin="isAdmin"
      thumbnail="http://placecorgi.com/300/400"
      title="hello there"
      previewText="this my first post"
    />
    <PostPreview
      id="1"
      :is-admin="isAdmin"
      thumbnail="http://placecorgi.com/300/400"
      title="hello there"
      previewText="this my first post"
    />
  </section>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview";
export default {
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
