import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDght7xONzYGIbzO2DWPjmOxaWi0xmaOEo",
  authDomain: "udemy-vue-firebase-bb93e.firebaseapp.com",
  projectId: "udemy-vue-firebase-bb93e",
  storageBucket: "udemy-vue-firebase-bb93e.appspot.com",
  messagingSenderId: "227331813172",
  appId: "1:227331813172:web:4616ac3eee405d83fb3f61"
};

firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp, projectAuth }