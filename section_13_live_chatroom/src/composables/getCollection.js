import { ref, watchEffect } from 'vue'
import { projectFirestore } from '../firebase/config'

const getCollection = (collection) => {
    const documents = ref(null)
    const error = ref(null)

    let collectionRef = projectFirestore.collection(collection).orderBy('createdAt')

    // on stocke la fonction dans une const pour se désincrire lorsque le composant est démonté (onIvalidate)
    const unsub = collectionRef.onSnapshot((snap) => {
        console.log('snapshot')
        let results = []
        snap.docs.forEach(doc => {
            doc.data().createdAt && results.push({ ...doc.data(), id: doc.id})
        })
        documents.value = results 
        error.value = null
    }, (err) => {
        console.log(err.message)
        documents.value = null
        error.value = 'could not fetch data'    
    })

    // surveille le démontage du composant (onInvalidate) ex: ChatWindow.vue
    watchEffect((onInvalidate) => {
        // il suffit d'appeler la fonction unsub() pour se désinscrire du snapshot de la collection
        onInvalidate(() => unsub())
    })

    return {error, documents}
}

export default getCollection