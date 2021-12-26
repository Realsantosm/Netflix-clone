import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const config = {
    apiKey: "AIzaSyDzqzWNUKx8u85A0MNR0ZZFCT33E2ia_js",
    authDomain: "netflix-clone-c4010.firebaseapp.com",
    projectId: "netflix-clone-c4010",
    storageBucket: "netflix-clone-c4010.appspot.com",
    messagingSenderId: "31943027224",
    appId: "1:31943027224:web:f6463adeb1d8e76932b16d"
};

const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
