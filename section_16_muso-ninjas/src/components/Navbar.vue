<template>
  <div class="navbar">
      <nav>
          <img src="@/assets/muso.png" alt="">
          <h1><router-link :to="{name:'Home'}">Muso Ninjas</router-link></h1>
          <div class="links">
              <!-- Visible s'il y a un User -->
              <div v-if="user">
                <router-link :to="{ name: 'CreatePlaylist'}">Create Playlist</router-link>              
                <button @click="handleClick">Logout</button>
              </div>
              <div v-else>
                <router-link class="btn" :to="{ name: 'Signup'}">Signup</router-link>
                <router-link class="btn" :to="{ name: 'Login'}"> Login</router-link>
              </div>
          </div>
      </nav>
  </div>
</template>

<script>
import useLogout from '../composables/useLogout'
// Charge le composable
import getUser from '../composables/getUser'
import {useRouter} from 'vue-router'

export default {
    setup() {
        const { error, logout, isPending } = useLogout()
        // récupère la variable du composable 
        const { user } = getUser()
        const router = useRouter()

        const handleClick = async () => {
            await logout()
            if(!error.value) {
                console.log('user logged out !')
                router.push({ name: 'Login'})
            }
        }

        return { error, isPending, user, handleClick}
    }
}
</script>

<style scoped>
.navbar{
    padding: 16px 10px;
    margin-bottom: 60px;
    background: white;
}
nav{
    display: flex;
    align-items: center;
    max-width: 1200px;
    margin: 0 auto
}
nav h1{
    margin-left: 20px;
}
/* Astuce pour éviter un flex space-between */
nav .links{
    margin-left: auto;
}
nav .links a, button{
    margin-left: 16px;
    font-size: 14px
}
nav img{
    max-height: 60px
}
</style>