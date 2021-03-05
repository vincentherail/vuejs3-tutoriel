<template>
  <div class="about">
    <transition 
      appear 
      name="fade"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
            >
      <h1 v-if="showTitle">About</h1>
    </transition>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam officia possimus delectus inventore quod quisquam culpa voluptas iusto, quae maiores quo dolorum, corporis laboriosam a dolore consequatur assumenda nam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam officia possimus delectus inventore quod quisquam culpa voluptas iusto, quae maiores quo dolorum, corporis laboriosam a dolore consequatur assumenda nam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam officia possimus delectus inventore quod quisquam culpa voluptas iusto, quae maiores quo dolorum, corporis laboriosam a dolore consequatur assumenda nam!</p>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup() {
    const showTitle = ref(true)

    // el représente l'elément DOM activé par le hook, ici h1
    const beforeEnter = (el) => {
      console.log('beforeEnter', el)
    }
    const enter = (el) => {
      console.log('enter', el)
    }
    const afterEnter = (el) => {
      el.style.color = 'green'
      console.log('after enter', el)

      setTimeout(() => showTitle.value = false, 2000)
    }
    const beforeLeave = (el) => {
      console.log('beforeleave', el)      
    }
    const leave = (el) => {
      el.style.color = 'pink'
      console.log('leave', el)      
    }
    const afterLeave = (el) => {
      console.log('after leave', el)
    }

    return { showTitle, beforeEnter, enter, afterEnter, beforeLeave, leave, afterLeave}
  }
}
</script>

<style>
  .about {
    max-width: 600px;
    margin: 20px auto;
  }

  .fade-enter-from{
    opacity: 0;
  }
  .fade-enter-active{
    transition : opacity 3s ease;
  }
  .fade-leave-to{
    opacity: 0;
  }
  .fade-leave-active{
    transition : opacity 3s ease;
  }
</style>