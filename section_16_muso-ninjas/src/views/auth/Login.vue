<template>
    <form @submit.prevent="handleSubmit">
        <h3>Login</h3>
        <input type="email" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <div class="error" v-if="error">{{error}}</div>
        <!-- Si nous ne sommes pas en attente, on affiche le btn -->
        <button v-if="!isPending">Log in</button>
        <!-- Sinon, btn désactivé -->
        <button v-else disabled>Loading...</button>
    </form>
</template>

<script>
import useLogin from '@/composables/useLogin'
import {ref} from 'vue'

export default {
    setup() {
        // const chargée
        const { error, login, isPending} = useLogin()

        const email = ref('')
        const password = ref('')

        const handleSubmit = async () => {
            const res = await login(email.value, password.value)
            if(!error.value) {
                console.log('user logged in')
            }
        }

        // const retournée    
        return {error, email, password, handleSubmit, isPending}
    }
}
</script>

<style>

</style>