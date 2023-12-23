<template>
  <div>
    <h1 class="text-center mb-2">List BLOG</h1>
    <ListBlog v-bind:blogs="data" />
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import ListBlog from "../components/ListBlog.vue";
import axios from "axios";

const data = ref([]);
onBeforeMount(async () => {
  await axios
    .get("https://65826ac202f747c8367955dc.mockapi.io/api/v1/blog")
    .then((res) => {
      data.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>

<style scope></style>
