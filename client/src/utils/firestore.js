import firebase from "firebase/compat/app";
import "firebase/firestore";

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCCYD_cFeiLHNRs6xL0ExeNdEpE2nMBdHk",
  authDomain: "fake-store-firebase.firebaseapp.com",
  projectId: "fake-store-firebase",
  storageBucket: "fake-store-firebase.appspot.com",
  messagingSenderId: "315464666658",
  appId: "1:315464666658:web:57bc56340dbe7c6da1447b",
};

const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);

