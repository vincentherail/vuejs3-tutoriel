<template>
      <form @submit.prevent="handleSubmit">
        <h3>Sign up</h3>
        <input type="text" placeholder="Display Name" v-model="displayName">
        <input type="email" placeholder="Email" v-model="email">
        <input type="password" placeholder="Password" v-model="password">
        <div class="error" v-if="error">{{error}}</div>
        <!-- Si nous ne sommes pas en attente, on affiche le btn -->
        <button v-if="!isPending">Sign up !</button>
        <!-- Sinon, btn désactivé -->
        <button v-else disabled>Loading...</button>
    </form>
</template>

<script>
import useSignup from '@/composables/useSignup'
import {ref} from 'vue'
import {useRouter} from 'vue-router'

export default {
    setup() {
        const { error, signup, isPending} = useSignup()
        const router = useRouter()

        const email = ref('')
        const password = ref('')
        const displayName = ref('')

        const handleSubmit = async () => {
            const res = await signup(email.value, password.value, displayName.value)
            if(!error.value) {
                router.push({name: 'UserPlaylists'})
            }
        }

        return {error, email, password, displayName, handleSubmit, isPending}
    }
}
</script>

<style>

</style>