import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyDOXk9GZZS9qpVeVGpZYI8HWjy0EH6kWaE",
  authDomain: "mynewsscrap.firebaseapp.com",
  projectId: "mynewsscrap",
  storageBucket: "mynewsscrap.appspot.com",
  messagingSenderId: "483322562801",
  appId: "1:483322562801:web:16285ed3b784d8b25c8150",
  measurementId: "G-59SXR4L0LS"
};
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export const db = firebase.firestore();
