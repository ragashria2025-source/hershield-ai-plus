// frontend/src/firebaseInit.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-storage.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.14.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyB1RoS1_INWVADvQv4B6I9CTxHYHkGGqg4",
  authDomain: "hershield-ai-plus.firebaseapp.com",
  projectId: "hershield-ai-plus",
  storageBucket: "hershield-ai-plus.firebasestorage.app",
  messagingSenderId: "1092924767415",
  appId: "1:1092924767415:web:c07855b99ac52a015be132",
  measurementId: "G-WVZ4ZSRKPR"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
