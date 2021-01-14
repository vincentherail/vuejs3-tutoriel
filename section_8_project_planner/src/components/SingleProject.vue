<template>
  <div class="project" :class="{complete : project.complete}">
      <div class="actions">
        <h3 @click="this.DetailsVisibility = !this.DetailsVisibility">
            {{project.title}}
        </h3>
        <div class="icons">
            <router-link :to="{ name:'EditProject', params : {id: project.id}}">
              <span class="material-icons">edit</span>
            </router-link>
            <span @click="deleteProject" class="material-icons">delete</span>
            <span @click="toggleComplete" class="material-icons tick">done</span>
        </div>
      </div>
      <div class="details" v-if="DetailsVisibility">
          <p>{{project.details}}</p>
      </div>
  </div>
</template>

<script>
export default {
    props: ['project'],
    data() {
        return {
            DetailsVisibility : false,
            uri: 'http://localhost:3000/projects/' + this.project.id
        }
    },
    methods: {
        deleteProject() {
            fetch(this.uri, { method: 'DELETE'})
            // ci-dessous this.project.id est le param qui sera récup par la fonction qui écoute l'event emited
            .then(() => this.$emit('delete', this.project.id))
            .catch(err => console.log(err.message))
        },
        toggleComplete() {
            fetch(this.uri, { 
                // method PATCH permet de modifier une propriété précise au sein d'un objet
                method: 'PATCH',
                // précise quel type de données la requête envoie
                headers: {'Content-Type': 'application/json'},
                // la donnée envoyée, mise sous forme JSON car on ne peut pas transférer de la data JS
                body: JSON.stringify({ complete: !this.project.complete })
            }).then(() => {
                this.$emit('complete', this.project.id)
            }).catch((err) => console.log(err.message))
        }
    }
}
</script>

<style>
  .project {
    margin: 20px auto;
    background: white;
    padding: 10px 20px;
    border-radius: 4px;
    box-shadow: 1px 2px 3px rgba(0,0,0,0.05);
    border-left: 4px solid #e90074;
  }
  h3 {
    cursor: pointer;
  }
  .actions {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .material-icons {
    font-size: 24px;
    margin-left: 10px;
    color: #bbb;
    cursor: pointer;
  }
  .material-icons:hover {
    color: #777;
  }
    /* completed projects */
  .project.complete {
    border-left: 4px solid #00ce89;
  }
  .project.complete .tick {
    color: #00ce89;
  }
  </style>