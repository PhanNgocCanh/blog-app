<template>
  <div class="row">
    <BLog v-for="item in blogs" v-bind:key="item.blogId" v-bind:blog="item" />
  </div>
</template>

<script setup>
import BLog from "./BLog.vue";

defineProps({
  blogs: { type: Array, default: [] },
});
</script>

<style></style>
