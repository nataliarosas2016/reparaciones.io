import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getAuth } from " https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js"

//const firebaseConfig = {
  // Paste your firebase config here
//};

// Initialize Firebase
//export const app = initializeApp(firebaseConfig);
//export const auth = getAuth(app)
//export const db = getFirestore(app)
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCst_krzAQpsfnJSGCibHlrdJPaVPhrQ0",
  authDomain: "reparaciones-app-videojuegos.firebaseapp.com",
  projectId: "reparaciones-app-videojuegos",
  storageBucket: "reparaciones-app-videojuegos.appspot.com",
  messagingSenderId: "1022418787033",
  appId: "1:1022418787033:web:75a942b64be2ba0cab3cc8"
};
// Initialize Firebase
//importar aplicación en otros archivos export 
export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)