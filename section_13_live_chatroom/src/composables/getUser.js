import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

// lorsque l'user se connecte, Firebase peut détecter s'il était déjà connecté ou pas
const user = ref(projectAuth.currentUser)

// triggered everytime user loggs in, loggs out, signup ...
// variable underscore user pour ne pas la confondre avec la const user
projectAuth.onAuthStateChanged(_user => {
    console.log('User state change. Current user is: ', _user)
    user.value = _user
})

const getUser = () => {
    return {user}
}

export default getUser