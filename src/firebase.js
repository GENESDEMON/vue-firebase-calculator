import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBzxlYdJX9sNrqkH5qtQ1277MAT4ADcfJM",
    authDomain: "nicevue2020.firebaseapp.com",
    databaseURL: "https://nicevue2020.firebaseio.com",
    projectId: "nicevue2020",
    storageBucket: "nicevue2020.appspot.com",
    messagingSenderId: "1066815593356",
    appId: "1:1066815593356:web:ceb926e0504f7ad65c94a9"
  };
firebase.initializeApp(firebaseConfig);

export default {
    auth: firebase.auth(),
    login() {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        console.log(result);
      })
      .catch(function(error){
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = error.credential;
        console.log(errorCode, errorMessage, email, credential);
        })
    },
    logout() {
      firebase.auth().signOut()
      .then(function() {})
      .catch(function(error) {
        console.log(error)});
    }
}