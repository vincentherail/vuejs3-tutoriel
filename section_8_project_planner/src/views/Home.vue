<template>
  <div class="home">
    <FilterNav @filterChange="current = $event" :current="current"/>
    <div v-if="projects.length">
      <div v-for="project in filteredArray" :key="project.id">
        <SingleProject :project="project" @delete="handleDelete" @complete="handleComplete"/>
      </div>
    </div>
    <div v-else>
      <p>Loading Projects</p>
    </div>
  </div>
</template>

<script>
import SingleProject from '../components/SingleProject'
import FilterNav from '../components/FilterNav'

export default {
  name: 'Home',
  components: {SingleProject, FilterNav},
  data() {
    return {
      projects: [],
      current: 'all'
    }
  },
  computed: {
    filteredArray() {
      if (this.current === 'completed') {
        return this.projects.filter(project => project.complete)
      }
      if(this.current === 'ongoing') {
        return this.projects.filter(project => !project.complete)
      }
      return this.projects
    }
  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter((project) => {
        return project.id !== id 
      })
    },
    handleComplete(id) {
      // find le project modifié
      let p = this.projects.find((project) => {
        return project.id === id
      })
      // update external data une fois que la fetch() dans SingleProject nous est retournée sans erreur (event emit 'complete')
      p.complete = !p.complete
    }
  },
  mounted() {
    fetch('http://localhost:3000/projects')
    .then(res => res.json())
    .then(data => this.projects = data)
    .catch(err => console.log(err.message))
  }
}
</script>
