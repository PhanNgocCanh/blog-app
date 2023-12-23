<template>
  <div class="col-sm-2 col-lg-3 col-md-4 mb-3 blog">
    <div class="border rounded-1 shadow-sm">
      <img v-bind:src="blog.blogImage" alt="" class="w-100 border-1" />
      <div class="blog-content px-2 py-1">
        <div class="blog-infomation">
          <p class="fs-6 fw-bold mb-1">{{ blog.blogName }}</p>
          <p class="description mb-2 position-relative">
            {{ blog.description }}
          </p>
          <RouterLink
            :to="{ name: 'blog', params: { id: blog.id } }"
            class="btn btn-primary btn-sm mb-2"
            >View detail</RouterLink
          >
        </div>
        <div
          class="d-flex justify-content-between align-items-center border-top py-2 adding-infomation"
        >
          <div class="author">
            <img :src="blog.authorImage" alt="" class="author-image" />
            <span class="ms-1 author-name">{{ blog.authorName }}</span>
          </div>
          <p class="mb-0 create-date">Created: 22/12/2023</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";

defineProps({
  blog: Object,
});
</script>

<style scoped>
.blog {
  transition: all 0.5s ease;
}
.blog:hover {
  transform: translateY(-2px);
}
.description {
  color: #a4a4a4;
  min-height: 80px;
  max-height: 120px;
}
.author-image {
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.author-name {
  font-size: 12px;
  font-weight: 400;
  font-style: italic;
}
.create-date {
  font-size: 12px;
  color: #787878;
}
</style>
