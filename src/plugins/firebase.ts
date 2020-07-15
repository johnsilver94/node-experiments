import firebase from "firebase/app";
import "firebase/firestore";

firebase.initializeApp({
  apiKey: "AIzaSyDzDO5jVVd0oFYa4_a5-ssXosMC1lvAW0Y",
  authDomain: "vue-calendar-6ef2b.firebaseapp.com",
  databaseURL: "https://vue-calendar-6ef2b.firebaseio.com",
  projectId: "vue-calendar-6ef2b",
  storageBucket: "vue-calendar-6ef2b.appspot.com",
  messagingSenderId: "1081839840583",
  appId: "1:1081839840583:web:6e4e6581fdcbd891c8b062"
});

export const db = firebase.firestore();
