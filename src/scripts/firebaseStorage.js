import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHlSWxvDJQpe1j6MM-cSYvEwpJHgAAVDw",
  authDomain: "test-9584d.firebaseapp.com",
  projectId: "test-9584d",
  storageBucket: "test-9584d.appspot.com",
  messagingSenderId: "521557608446",
  appId: "1:521557608446:web:f79895370b0a51eb8b62af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }