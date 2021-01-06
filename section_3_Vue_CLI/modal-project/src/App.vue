<template>
  <h1>{{title}}</h1>
  <p>Welcome...</p>
  <teleport to=".modals" v-if="showModal">
    <Modal theme="" @close="toggleModal">
        <h1>Ninja Ninja</h1>
        <p>Grab you rNinja swag for half the price !</p>
        <template v-slot:links>
          <a href="#">Sign up</a>
          <a href="#">More infos</a>
        </template>
    </Modal>
  </teleport>
  <div v-if="showModalTwo">
    <Modal theme="sale" @close="toggleModalTwo">
        <template v-slot:links>
          <a href="#">You did it</a>
        </template>
    </Modal>
  </div>
  <button @click="toggleModal">Open Modal</button><br/>
  <button @click="toggleModalTwo">Open Modal Two</button>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'My first Vue App:)',
      header: 'modal title',
      text: 'hello I am the prop beign passed',
      showModal : false,
      showModalTwo : false
    }
  },
  methods: {
    handleClick() {
      this.$refs.boo.classList.add('active')
      console.log(this.$refs.boo)
    },
    toggleModal() {
      this.showModal = !this.showModal
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo
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
</style>
