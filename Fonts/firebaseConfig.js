// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAuth } from "firebase/auth";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCvAJIaQ-9hxFlI0ZXoChACGFIQXg8IKvs",
  authDomain: "instudo-com-voce.firebaseapp.com",
  projectId: "instudo-com-voce",
  storageBucket: "instudo-com-voce.appspot.com",
  messagingSenderId: "776660738382",
  appId: "1:776660738382:web:0c82403f21bcbbe8817e1f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
//const auth = getAuth(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export { auth }