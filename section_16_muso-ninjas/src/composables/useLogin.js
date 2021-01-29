import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

const error = ref(null)
// déclare la const
const isPending = ref(false)

const login = async (email, password) => {
  error.value = null
  // demande effectuée, nous sommes en attente
  isPending.value = true
  
  try {
    const res = await projectAuth.signInWithEmailAndPassword(email, password)
    // réponse reçue, attente finie
    isPending.value = false
    error.value = null
    return res
  }
  catch(err) {
    // réponse reçue, attente finie
    isPending.value = false
    console.log(err.message)
    error.value = 'Incorrect login credentials'
  }
}

const useLogin = () => {
  // const renvoyée
  return { error, login, isPending }
}

export default useLogin