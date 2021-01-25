import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

const error = ref(null)

const signup = async (email, password, displayName) => {
    // réinitialise erreur qui pourrait contenir des erreurs dans les tentatives de signup précédente de la part de l'user
    error.value = null
    try {
        const res = await projectAuth.createUserWithEmailAndPassword(email, password)
        if (!res) {
            throw new Error('Could not complete the signup')
        }
        await res.user.updateProfile({ displayName })
        error.value = null
        // res retournée car on pourra s'en servir plus tard
        return res
    }
    catch(err) {
        console.log(err.message)
        error.value = err.message
    }
}

const useSignup = () => {

    return { error, signup}

}

export default useSignup