<script lang="ts" setup>
const nuxtApp = useNuxtApp();

const posts = await nuxtApp.$apiFetch("/api/posts");

</script>

<template>
   <div class="container mx-auto w-1/2 py-8 divide-y space-y-8 divide-gray-300">
    <PostComponentVue v-for="post in posts" :key="post.id" :post="post"/>
  </div>

  {{ posts }}

</template>
<style scoped></style>
