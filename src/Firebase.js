import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyC_jLcuRBFFCOjQ2vlmzApyjOXURXORjAo",
    authDomain: "abujalance-chat-ba7c3.firebaseapp.com",
    databaseURL: "https://abujalance-chat-ba7c3.firebaseio.com",
    projectId: "abujalance-chat-ba7c3",
    storageBucket: "abujalance-chat-ba7c3.appspot.com",
    messagingSenderId: "84867754979",
    appId: "1:84867754979:web:e21af78f78c111c82e0ed6"
  };

  firebase.initializeApp(config);
  export default firebase;