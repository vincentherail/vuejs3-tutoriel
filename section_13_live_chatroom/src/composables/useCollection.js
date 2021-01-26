import { ref } from 'vue'
import { projectAuth, projectFirestore } from '../firebase/config'

const useCollection = (collection) => {
    // chaque fois que l'on utilise la fonction on créé une nouvelle version de l'error, ce qui permet d'en avoir une pour chaque collection 
    const error = ref(null)

    const addDoc = async (doc) => {
        error.value = null
        
        try {
            // on aurait pu faire await projectFirestore.collection('messages').add({}) mais le composable n'aurait pas été ré-utilisable pour une autre collection
            await projectFirestore.collection(collection).add(doc)

        } catch (err) {
            console.log(err.message)
            error.value = 'could not send the message'
        }
    }

    return {error, addDoc}
}

export default useCollection