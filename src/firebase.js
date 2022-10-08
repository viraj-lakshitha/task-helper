import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC197zc3fXnlLwLvaA6mEGFy34MK1qYwLI",
  authDomain: "vititya99-task-helper.firebaseapp.com",
  projectId: "vititya99-task-helper",
  storageBucket: "vititya99-task-helper.appspot.com",
  messagingSenderId: "534164533745",
  appId: "1:534164533745:web:e1cbd4d5c5f44602221450",
  measurementId: "G-CNZPF3KL85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getFirestore(app)
const tableRef = collection(database, "todo") // create collection in firestore with name 'todo'