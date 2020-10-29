import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyB8RlvujEiHbE9P8xVOkNuhwcBL68amqbk",
    authDomain: "mariocion.firebaseapp.com",
    databaseURL: "https://mariocion.firebaseio.com",
    projectId: "mariocion",
    storageBucket: "mariocion.appspot.com",
    messagingSenderId: "686729146488",
    appId: "1:686729146488:web:616d1589627275610bbd8d"
  }; 
firebase.initializeApp(firebaseConfig)
firebase.firestore().settings({timestampsInSnapshots:true})

export default firebase 