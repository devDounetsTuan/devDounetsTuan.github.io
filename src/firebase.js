import * as firebase from 'firebase';
//import firestore from 'firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyB6DkOYgw9nfemU3cH8BtGLO1-bX5F2q3k",
    authDomain: "mydb-66a6a.firebaseapp.com",
    databaseURL: "https://mydb-66a6a.firebaseio.com",
    projectId: "mydb-66a6a",
    storageBucket: "mydb-66a6a.appspot.com",
    messagingSenderId: "458317398695"
};

firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;