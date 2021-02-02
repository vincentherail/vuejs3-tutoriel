import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'


const firebaseConfig = {
  apiKey: "AIzaSyAN3ZNh8Vb-fl3K0dgUThz9mjsOYCfzx7Q",
  authDomain: "muso-ninjas-b6131.firebaseapp.com",
  projectId: "muso-ninjas-b6131",
  storageBucket: "muso-ninjas-b6131.appspot.com",
  messagingSenderId: "60941302678",
  appId: "1:60941302678:web:2352bc24cfe3f89d8d3bb7"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp}