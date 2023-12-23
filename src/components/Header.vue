<template>
  <header class="py-2">
    <ul class="nav mb-auto d-flex align-items-center justify-content-center">
      <li class="nav-item">
        <RouterLink to="/" class="nav-link fs-4 fw-bold text-black active"
          >Home</RouterLink
        >
      </li>
    </ul>
    <hr />
  </header>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  name: "header",
  setup() {
    return {
      RouterLink,
    };
  },
};
</script>

<style scoped>
.active {
  color: blueviolet !important;
}
</style>
