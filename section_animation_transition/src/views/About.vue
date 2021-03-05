<template>
  <div class="about">
    <transition 
      appear 
      @before-enter="beforeEnter"
      @enter="enter"
      @afterEnter="afterEnter"
    >
      <h1 >About</h1>
    </transition>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam officia possimus delectus inventore quod quisquam culpa voluptas iusto, quae maiores quo dolorum, corporis laboriosam a dolore consequatur assumenda nam!</p>

  </div>
</template>

<script>
import gsap from 'gsap'

export default {
  setup() {

    const beforeEnter = (el) => {
      console.log('before enter - set initial state')
      el.style.transform ='translateY(-60px)'
      el.style.opacity = 0
    }
    const enter = (el, done) => {
      console.log('starting enter - make transition')
      gsap.to(el, {
        duration: 3,
        y: 0,
        opacity: 1,
        // fait rebondir l'element
        ease: 'bounce.out',
        // on passe au hook suivant une fois cette anim finie
        onComplete: done
      })
    }
    const afterEnter = (el) => {
      console.log('after enter ')
    }

    return {  beforeEnter, enter, afterEnter }
  }
}
</script>

<style>
  .about {
    max-width: 600px;
    margin: 20px auto;
  }


</style>