<template>
  <h1>Ninja Reaction Timer</h1>
  <!-- can not start a new game, while current game is on -->
  <button @click="start" :disabled="isPlaying">play</button>
  <Block v-if="isPlaying" :delay="delay" @end="endGame"/>
  <Results :score="score" v-if="showResults"/>
</template>

<script>
import Block from './components/Block'
import Results from './components/Results'

export default {
  name: 'App',
  components: { Block, Results },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score : null,
      showResults: false
    }
  },
  methods: {
    start() {
      // a chaque fois que l'on joue, cela créera un delay aléatoire entre 2 et 7 s
      this.delay = 2000 + Math.random() * 5000
      this.isPlaying = true
      this.showResults = false
    },
    // l'event 'end' emit depuis Block est écouté dans la balise Block, il déclenche la fonction et récupère la durée de raction
    endGame(reactionTime){
      this.score = reactionTime
      console.log(this.score)
      this.isPlaying = false
      this.showResults = true
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  button {
    background: #0faf87;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 16px;
    letter-spacing: 1px;
    cursor: pointer;
    margin: 10px;
  }
  button[disabled] {
    opacity: 0.2;
    cursor: not-allowed;
  }
</style>
