import * as firebase from 'firebase';

// should go in a secret file
const config = {
    apiKey: "AIzaSyDWbn0xSo7KzZOOKYeJ8KZV1Di4lmF229A",
    authDomain: "spring-fest-2017.firebaseapp.com",
    databaseURL: "https://spring-fest-2017.firebaseio.com",
    projectId: "spring-fest-2017",
    storageBucket: "spring-fest-2017.appspot.com",
    messagingSenderId: "112431622894"
};
firebase.initializeApp(config);

export default firebase;