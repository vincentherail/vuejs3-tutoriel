<template>
  <div class="home">
    <h1>Home</h1>
      <input type="text" v-model="search">
      <p>search term - {{ search }}</p>
      <div v-for="name in matchingNames" :key="name">{{name}}</div>
      <button @click="handleClick">Stop watch</button>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from 'vue'
export default {
  name: 'Home',
  setup() {    
    const search = ref('')
    const names = ref(['mario', 'yoshi', 'jumbo', 'babar', 'sandy'])

    const stopWatch = watch(search, () => {
      console.log('watch function run')
    })

    const stopEffect = watchEffect(() => {
      console.log('watch effect ran', search.value)
    })

    const handleClick = () => {
      stopWatch()
      stopEffect()
    }

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })

    return { names, search, matchingNames, handleClick }
  },
}
</script>