<template>
  <nav v-if="user">
    <div>
        <p>Hey {{ user.displayName }} </p>
        <p class="email">Currently logged in as {{ user.email }}</p>
    </div>
    <button @click="handleClick">Logout</button>
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'

export default {
    setup() {
        const {error, logout } = useLogout()
        // user sera null s'il n'était pas loggé (et changera s'il se logge), ou le current user (et deviendra null s'il se log out)
        const { user } = getUser()

        const handleClick = async () => {
            await logout()
            if(!error.value){
                console.log('user logged out')
            }
        }

        return {error, handleClick, user}
    }
}
</script>

<style>
  nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
  }
  nav p.email {
    font-size: 14px;
    color: #999;
  }
</style>