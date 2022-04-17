import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMJflMKUOuSFwp0hd0ieecStdIjuuz4fw",
  authDomain: "fitnessify-f9f27.firebaseapp.com",
  projectId: "fitnessify-f9f27",
  storageBucket: "fitnessify-f9f27.appspot.com",
  messagingSenderId: "1010536575021",
  appId: "1:1010536575021:android:a70a480f7d234ab9ac88a4"
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
    const app = firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth()

export { auth };
