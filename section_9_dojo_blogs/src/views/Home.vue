<template>
  <div class="home">
    <h1>Home</h1>
      <button @click="showPosts = !showPosts">Toggle post</button>
      <PostList v-if="showPosts" :posts="posts"/>
  </div>
</template>

<script>
import PostList from '../components/PostList'
import { computed, ref, watch, watchEffect } from 'vue'
export default {
  name: 'Home',
  components: {PostList},
  setup() {    
    const posts = ref([
      {title: 'welcome to the blog', body: 'lorem ipsum', id:1},
      {title: 'welcomg', body: 'lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum', id:2}
    ])

    const showPosts = ref(true)

    return { posts, showPosts }
  },
}
</script>