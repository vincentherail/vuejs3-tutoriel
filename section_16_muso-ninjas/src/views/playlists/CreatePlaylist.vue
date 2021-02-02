<template>
  <form @submit.prevent="handleSubmit">
      <h4>Create New Playlist</h4>
      <input type="text" required placeholder="Playlist Title" v-model="title">
      <textarea required placeholder="Playlist Description..." v-model="description"></textarea>
      <!-- Upload playlist image -->
      <label>Upload playlist cover image</label>
      <input type="file" @change="handleChange">
      <div class="error"></div>
      <div class="error">{{ fileError }}</div>
      <button v-if="!isPending">Create</button>
      <button v-else disabled>Saving...</button>
  </form>
</template>

<script>
import { ref } from 'vue'
import useStorage from '@/composables/useStorage'
// ajouter des documents dans la DB
import useCollection from '@/composables/useCollection'
// récuperer le nom et l'ID de l'user
import getUser from '@/composables/getUser'
// pour la propriété createdAt
import { timestamp } from '@/firebase/config'

export default {
    setup() {
        const { filePath, url, uploadImage } = useStorage()
        const { error, addDoc } = useCollection('playlists')
        const { user } = getUser()

        const title = ref('')
        const description = ref('')
        const file = ref(null)
        const fileError = ref(null)
        const isPending =ref(false)


        const types = ['image/png', 'image/jpeg']

        const handleChange = (e) => {
            const selected = e.target.files[0]
            console.log(selected)
            if(selected && types.includes(selected.type)) {
                file.value = selected
                fileError.value = null
            } else {
                file.value = null
                fileError.value = 'Please select an image file (png or jpeg)'
            }
        }
        
        const handleSubmit = async () => {
            if(file.value) {
                isPending.value = true
                await uploadImage(file.value)
                await addDoc({
                    title: title.value,
                    description: description.value,
                    userId: user.value.uid,
                    userName: user.value.displayName,
                    // adresse publique de l'image
                    coverUrl: url.value,
                    // chemin de l'image pour la supprimer 
                    filePath: filePath.value,
                    songs: [],
                    createdAt: timestamp()
                })
                isPending.value = false
                if(!error.value) {
                    console.log('playlist added')
                }
            }
        }

        return { title, description, handleSubmit, handleChange, fileError, isPending}
    }
}
</script>

<style>
  input[type="file"] {
    border: 0;
    padding: 0;
  }
  label {
    font-size: 12px;
    display: block;
    margin-top: 30px;
  }
  button {
    margin-top: 20px;
  }
</style>