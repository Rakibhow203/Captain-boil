// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey:import.meta.env.VITE_apiKey  ,
//   authDomain:import.meta.env.VITE_authDomain ,
//   projectId:import.meta.env.VITE_projectId ,
//   storageBucket:import.meta.env.VITE_storageBucket,
//   messagingSenderId:import.meta.env.VITE_messagingSenderId ,
//   appId: import.meta.env.VITE_appId,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// export default auth;
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwnRURGbEI0Eyw3pFnl7lmdkIvb1xDt40",
  authDomain: "the-captains-boil-c354d.firebaseapp.com",
  projectId: "the-captains-boil-c354d",
  storageBucket: "the-captains-boil-c354d.appspot.com",
  messagingSenderId: "410485650696",
  appId: "1:410485650696:web:2191f2cebdd2d1e6d868bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default(auth)