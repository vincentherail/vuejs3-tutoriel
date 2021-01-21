// firebase/app core functionnality, always necessary
import firebase from 'firebase/app'
// propre à notre type de projet
import 'firebase/firestore'

const firebaseConfig = {
  // identifiant du projet, ne pas s'inquiéter de la sécurité car il y a des protections de la part de Firebase, de plus on ne peut logger qu'une app identifié par Firebase
  apiKey: "AIzaSyDght7xONzYGIbzO2DWPjmOxaWi0xmaOEo",
  authDomain: "udemy-vue-firebase-bb93e.firebaseapp.com",
  projectId: "udemy-vue-firebase-bb93e",
  storageBucket: "udemy-vue-firebase-bb93e.appspot.com",
  messagingSenderId: "227331813172",
  appId: "1:227331813172:web:7c8315fb715849dffb3f61"
};

// initialize firebase 
firebase.initializeApp(firebaseConfig)

// initialize firestore service
const projectFirestore = firebase.firestore()
const timestamp =firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp }