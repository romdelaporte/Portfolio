import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDqmo_huycw4JNgxvQ_MyzcJ2UPie3ZyXE",
  authDomain: "portfolio-bc9aa.firebaseapp.com",
  projectId: "portfolio-bc9aa",
  storageBucket: "portfolio-bc9aa.appspot.com",
  messagingSenderId: "677560786833",
  appId: "1:677560786833:web:cb21a8e604d8a37fa14430",
  measurementId: "G-92DT8CK8N3"
};

firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = firebase.auth();
export const db = firebase.firestore();