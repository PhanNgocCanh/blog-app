<template>
  <div
    class="row justify-content-center m-auto"
    v-if="Object.keys(blog).length > 0"
  >
    <div class="col-lg-8">
      <div class="text-center">
        <img
          class="author-image m-auto rounded-circle"
          :src="blog.authorImage"
          alt=""
        />
      </div>
      <p class="text-center text-gray fs-5 mt-1">{{ blog.authorName }}</p>
      <p class="text-center text-gray">JULY 2, 2020</p>
      <div class="d-flex flex-column justify-content-center"></div>
      <h2 class="text-center">
        {{ blog.blogName }}
      </h2>
      <p class="text-center fs-6 text-gray">
        {{ blog.description }}
      </p>
      <img class="w-100 rounded-2" :src="blog.blogImage" alt="" />
      <p class="mt-2 text-gray fs-5">
        Far far away, behind the word mountains, far from the countries Vokalia
        and Consonantia, there live the blind texts. Separated they live in
        Bookmarksgrove right at the coast of the Semantics, a large language
        ocean.
      </p>
      <div class="gallery row">
        <img
          class="col-md-4 rounded-4 py-1 px-1 shadow- mb-sm-2"
          src="https://preview.colorlib.com/theme/magdesign/images/post_lg_1.jpg"
          alt=""
        />
        <img
          class="col-md-4 rounded-4 py-1 px-1 shadow- mb-sm-2"
          src="https://preview.colorlib.com/theme/magdesign/images/post_lg_2.jpg"
          alt=""
        />
        <img
          class="col-md-4 rounded-4 py-1 px-1 shadow- mb-sm-2"
          src="https://preview.colorlib.com/theme/magdesign/images/post_lg_3.jpg"
          alt=""
        />
        <img
          class="col-md-4 rounded-4 py-1 px-1 shadow- mb-sm-2"
          src="https://preview.colorlib.com/theme/magdesign/images/post_lg_4.jpg"
          alt=""
        />
        <img
          class="col-md-4 rounded-4 py-1 px-1 shadow- mb-sm-2"
          src="https://preview.colorlib.com/theme/magdesign/images/post_lg_1.jpg"
          alt=""
        />
        <img
          class="col-md-4 rounded-4 py-1 px-1 shadow- mb-sm-2"
          src="https://preview.colorlib.com/theme/magdesign/images/post_lg_2.jpg"
          alt=""
        />
      </div>
    </div>
    <hr />
    <div class="relate-bolg">
      <h2 class="fw-bold">Related blog</h2>
      <ListRelatedBlog />
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { onBeforeMount, ref } from "vue";
import { useRoute } from "vue-router";
import ListRelatedBlog from "../components/ListRelatedBlog.vue";

const router = useRoute();
const blog = ref({});

onBeforeMount(() => {
  axios
    .get(
      "https://65826ac202f747c8367955dc.mockapi.io/api/v1/blog/" +
        router.params.id
    )
    .then((res) => {
      blog.value = res.data;
    })
    .catch((err) => {
      console.log(err);
    });
});
</script>

<style scope>
.author-image {
  width: 80px;
  height: 80px;
}
.text-gray {
  color: gray;
}
</style>
